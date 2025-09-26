import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { ArXivXplorerClient } from './api-client';
import { getCategories, validateCategories, COMPREHENSIVE_CATEGORIES } from './categories';
import { SearchPapersParams } from './types';

const client = new ArXivXplorerClient();

const server = new McpServer({
  name: 'arxiv-semantic-search-mcp',
  version: '0.0.1'
});

// Register search_papers tool
server.registerTool(
  'search_papers',
  {
    title: 'Search ArXiv Papers',
    description: 'Search for academic papers from ArXiv with advanced filtering capabilities',
    inputSchema: {
      query: z.string().describe('Search query terms (space-separated or plus-separated)'),
      categories: z.array(z.enum(['cs.AI', 'cs.LG', 'cs.CL', 'cs.CV', 'cs.IR', 'cs.NE', 'stat.ML', 'math.ST', 'physics.data-an'])).optional().describe('Filter by ArXiv categories (can specify multiple categories) - see get_categories for full list'),
      years: z.array(z.number().min(1991).max(new Date().getFullYear())).optional().describe('Filter by publication years (can specify multiple years)')
    }
  },
  async ({ query, categories, years }: SearchPapersParams) => {
    try {
      // Validate categories if provided
      let validatedCategories = categories;
      if (categories && categories.length > 0) {
        validatedCategories = validateCategories(categories);
        if (validatedCategories.length === 0) {
          return {
            content: [
              {
                "type": "text",
                "text": "Error: No valid categories provided. Use get_categories to see available options."
              }
            ],
            isError: true
          };
        }
      }

      // Validate years if provided
      if (years && years.length > 0) {
        const currentYear = new Date().getFullYear();
        const validYears = years.filter(year =>
          year >= 1991 && year <= currentYear
        );
        if (validYears.length === 0) {
          return {
            content: [
              {
                "type": "text",
                "text": "Error: No valid years provided. Years must be between 1991 and current year."
              }
            ],
            isError: true
          };
        }
      }

      const results = await client.searchPapers(query, validatedCategories, years);

      // Format papers to match the desired structure
      const formattedPapers = results.results.slice(0, 10).map(paper => ({
        paper_id: paper.id,
        title: paper.title,
        authors: paper.authors.join('; '),
        abstract: paper.abstract,
        published_date: paper.published_date,
        url: paper.arxiv_url,
        pdf_url: paper.pdf_url,
        source: "ArXiv",
        updated_date: paper.updated_date,
        categories: paper.categories.join(', '),
        keywords: "",
        citation_count: 0,
        references: "",
        journal: "",
        volume: "",
        issue: "",
        pages: "",
        year: null,
        extra: ""
      }));

      return {
        content: [
          {
            "type": "text",
            "text": `Found ${results.total_count} papers.\n\n${formattedPapers.map(paper =>
              `TITLE: ${paper.title}
PUBLISHED_DATE: ${paper.published_date}
AUTHORS: ${paper.authors}
CATEGORIES: ${paper.categories}
ABSTRACT: ${paper.abstract.substring(0, 300)}${paper.abstract.length > 300 ? '...' : ''}
URL: ${paper.url}
PDF_URL: ${paper.pdf_url}`
            ).join('\n\n')}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            "type": "text",
            "text": `Error searching papers: ${error instanceof Error ? error.message : 'Unknown error'}`
          }
        ],
        isError: true
      };
    }
  }
);

// Register get_categories tool
server.registerTool(
  'get_categories',
  {
    title: 'Get ArXiv Categories',
    description: 'Get list of supported ArXiv categories with descriptions',
    inputSchema: {}
  },
  async () => {
    try {
      const categories = getCategories();

      return {
        content: [
          {
            "type": "text",
            "text": categories.map(catId => {
              const category = COMPREHENSIVE_CATEGORIES.find(c => c.id === catId);
              return category ? `${category.id} - ${category.name}` : catId;
            }).join(', ')
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            "type": "text",
            "text": `Error getting categories: ${error instanceof Error ? error.message : 'Unknown error'}`
          }
        ],
        isError: true
      };
    }
  }
);

export async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('ArXiv Semantic Search MCP server started');
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}