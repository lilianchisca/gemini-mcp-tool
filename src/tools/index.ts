// Tool Registry Index - Registers all tools
import { toolRegistry } from './registry.js';
import { askGeminiTool } from './ask-gemini.tool.js';

toolRegistry.push(
  askGeminiTool,
);

export * from './registry.js';
