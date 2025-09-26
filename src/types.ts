export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  categories: string[];
  published_date: string;
  updated_date: string;
  arxiv_url: string;
  pdf_url: string;
}

export interface SearchResponse {
  results: Paper[];
  total_count: number;
  query: string;
  filters: AppliedFilters;
}

export interface AppliedFilters {
  categories: string[];
  years: number[];
}

export interface ErrorResponse {
  error: string;
  code: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface SearchPapersParams {
  query: string;
  categories?: string[];
  years?: number[];
}