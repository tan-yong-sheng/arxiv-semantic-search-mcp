# ArXiv Semantic Search MCP Server

A Model Context Protocol (MCP) server that provides semantic search functionality for academic papers from ArXiv.

## Features

- **Search Papers**: Search for academic papers with advanced filtering by categories and years
- **Category Discovery**: Get detailed information about supported ArXiv categories
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Error Handling**: Robust error handling and validation

## Installation

```bash
npm install arxiv-semantic-search-mcp
```

## Usage

### MCP Server Tools

This server provides two main tools:

#### 1. `search_papers`

Search for academic papers from ArXiv with advanced filtering capabilities.

**Parameters:**
- `query` (required): Search query terms
- `categories` (optional): Array of category codes (e.g., `["cs.AI", "cs.LG"]`)
- `years` (optional): Array of publication years (e.g., `[2024, 2023]`)

#### 2. `get_categories`

Get JSON array of all ArXiv categories with ID and name. Returns: ["cs.AI - Artificial Intelligence", "cs.LG - Machine Learning", "stat.TH - Statistics Theory", ...]


### Supported Categories

The `get_categories` function returns the complete ArXiv category taxonomy with **170+ categories** across all major fields:

**Computer Science** (44 categories) - AI, Machine Learning, Vision, Databases, Networks, etc.
**Mathematics** (44 categories) - Algebra, Analysis, Geometry, Statistics, etc.
**Physics** (80+ categories) - Astrophysics, Condensed Matter, High Energy, Quantum, etc.
**Economics** (3 categories) - Econometrics, General Economics, Theory
**Electrical Engineering** (4 categories) - Signal Processing, Systems, etc.
**Quantitative Biology** (10 categories) - Genomics, Biomolecules, etc.
**Quantitative Finance** (9 categories) - Computational Finance, Risk Management, etc.
**Statistics** (6 categories) - Applications, Computation, Methodology, etc.

**Search Limitations:** The `search_papers` function currently supports filtering by these 9 categories:
`cs.AI`, `cs.LG`, `cs.CL`, `cs.CV`, `cs.IR`, `cs.NE`, `stat.ML`, `math.ST`, `physics.data-an`

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/tan-yong-sheng/arxiv-semantic-search-mcp.git
cd arxiv-semantic-search-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Run all checks
npm run check
```

### Scripts

- `npm run build` - Build TypeScript files
- `npm run lint` - Run ESLint
- `npm run check` - Run build and lint
- `npm run dev` - Run in development mode
- `npm run start` - Start the server

## API

This server uses the [ArXiv Xplorer API](https://search.arxivxplorer.com) for searching academic papers.

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run check` to ensure everything works
5. Submit a pull request

## Support

For issues and questions, please open an issue on the GitHub repository.