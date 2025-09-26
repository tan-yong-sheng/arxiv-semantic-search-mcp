import axios, { AxiosInstance } from 'axios';
import { Paper, SearchResponse } from './types';

export class ArXivXplorerClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://search.arxivxplorer.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'arxiv-semantic-search-mcp/0.0.1'
      }
    });
  }

  async searchPapers(
    query: string,
    categories?: string[],
    years?: number[]
  ): Promise<SearchResponse> {
    try {
      const params: Record<string, unknown> = { q: query };

      if (categories && categories.length > 0) {
        params.cats = categories;
      }

      if (years && years.length > 0) {
        params.year = years;
      }

      const response = await this.client.get('/', { params });

      // Validate response structure - API returns an array directly
      if (!response.data || !Array.isArray(response.data)) {
        throw new Error('Invalid API response format');
      }

      return {
        results: response.data.map((paper: Record<string, unknown>) => ({
          id: String(paper.id || ''),
          title: String(paper.title || ''),
          authors: paper.authors ? String(paper.authors).split(', ').map(author => author.trim()) : [],
          abstract: String(paper.abstract || ''),
          categories: Array.isArray(paper.categories) ? paper.categories.map(String) : [],
          published_date: String(paper.date || ''),
          updated_date: String(paper.date || ''),
          arxiv_url: String(paper.arxiv_url || `https://arxiv.org/abs/${paper.id}`),
          pdf_url: String(paper.pdf_url || `https://arxiv.org/pdf/${paper.id}.pdf`)
        })),
        total_count: response.data.length || 0,
        query: query,
        filters: { categories: categories || [], years: years || [] }
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.error || error.message;
        throw new Error(`API Error (${status}): ${message}`);
      }
      throw new Error(`Network Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getPaperById(id: string): Promise<Paper | null> {
    try {
      // Search for the specific paper ID
      const response = await this.searchPapers(id);

      // Find the exact match
      const paper = response.results.find(p => p.id === id || p.id.includes(id));

      return paper || null;
    } catch (error) {
      return null;
    }
  }
}