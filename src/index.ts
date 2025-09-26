#!/usr/bin/env node

export * from './server';
export * from './types';
export * from './categories';
export * from './api-client';

// Re-export the main server function for easier usage
import { main as serverMain } from './server';
export { serverMain as main };

// Start the server if this file is run directly
if (require.main === module) {
  serverMain().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}