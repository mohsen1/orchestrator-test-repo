# Project Direction: Simple Calculator Library

## Overview
Build a simple TypeScript calculator library with basic arithmetic operations and unit tests.

## Goals
1. Create a calculator module with add, subtract, multiply, divide functions
2. Add proper TypeScript types
3. Write comprehensive unit tests using Vitest
4. Add input validation (handle division by zero, NaN, etc.)
5. Create a simple CLI to use the calculator

## Tech Stack
- TypeScript
- Node.js
- Vitest for testing

## Structure
```
src/
  calculator.ts    # Core calculator functions
  cli.ts           # Command line interface
  types.ts         # Type definitions
tests/
  calculator.test.ts
package.json
tsconfig.json
```

## Success Criteria
- All arithmetic operations work correctly
- Division by zero throws appropriate error
- Tests pass with >90% coverage
- CLI accepts two numbers and an operator
