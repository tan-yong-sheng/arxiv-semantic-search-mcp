# ArXiv Semantic Search MCP Server

A Model Context Protocol (MCP) server that provides semantic search functionality for academic papers from ArXiv.

## Quick Start

No environment variables required - this server works out of the box with the ArXiv Xplorer API.

## Installation

### 1. Using with Claude Desktop

Add the server config to your Claude Desktop configuration file:

#### For Local Installation (on Windows)

```json
"arxiv-semantic-search-mcp": {
  "command": "cmd",
  "args": [
        "/k",
        "npx",
        "-y",
        "arxiv-semantic-search-mcp"
      ]
}
```

#### For Local installation (on Linux)

```json
"arxiv-semantic-search-mcp": {
  "command": "npx",
  "args": [
        "-y",
        "arxiv-semantic-search-mcp"
      ]
}
```

#### For Development (on Windows / Linux)

```bash
cd /path/to/arxiv-semantic-search-mcp
npm run build
```

```json
"arxiv-semantic-search-mcp": {
  "command": "node",
  "args": [
        "/path/to/arxiv-semantic-search-mcp/build/index.js"
      ]
}
```

Location of the configuration file:
- Windows: `%APPDATA%/Claude/claude_desktop_config.json`
- MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

## Available Tools

The server provides the following tools for academic paper search:

### Search & Discovery Tools

- `search_papers` - Search for academic papers from ArXiv with advanced filtering capabilities including query terms, category filtering, and year filtering. Returns detailed paper information including title, authors, abstract, categories, publication date, and direct links to both the paper page and PDF.
- `get_categories` - Get a comma-separated list of all supported ArXiv categories with their IDs and names.

## Example Queries

### Search & Discovery
- "Show me papers about computer vision published in 2023"
- "Search for papers in the cs.AI category about neural networks"
- "Find papers about quantum physics published between 2020-2024"

## Supported Categories

The `get_categories` function returns the complete ArXiv category taxonomy with **170+ categories** across all major fields:

- **Computer Science** (44 categories) - AI, Machine Learning, Vision, Databases, Networks, etc.
- **Mathematics** (44 categories) - Algebra, Analysis, Geometry, Statistics, etc.
- **Physics** (80+ categories) - Astrophysics, Condensed Matter, High Energy, Quantum, etc.
- **Economics** (3 categories) - Econometrics, General Economics, Theory
- **Electrical Engineering** (4 categories) - Signal Processing, Systems, etc.
- **Quantitative Biology** (10 categories) - Genomics, Biomolecules, etc.
- **Quantitative Finance** (9 categories) - Computational Finance, Risk Management, etc.
- **Statistics** (6 categories) - Applications, Computation, Methodology, etc.

## Development

If you want to contribute or modify the server:

```bash
# Clone the repository
git clone https://github.com/tan-yong-sheng/arxiv-semantic-search-mcp.git

# Install dependencies
npm install

# Build the server
npm run build

# Run linting
npm run lint

# Run all checks
npm run check

# For development with auto-rebuild
npm run dev
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

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## Support

For issues and questions, please open an issue on the GitHub repository.