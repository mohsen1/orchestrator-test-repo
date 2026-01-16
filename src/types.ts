/**
 * Supported arithmetic operations
 */
export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

/**
 * Result of a calculator operation
 */
export interface CalculationResult {
  result: number;
  operation: Operation;
  operands: [number, number];
}

/**
 * Calculator error types
 */
export class CalculatorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalculatorError';
  }
}

export class DivisionByZeroError extends CalculatorError {
  constructor() {
    super('Division by zero is not allowed');
    this.name = 'DivisionByZeroError';
  }
}

export class InvalidInputError extends CalculatorError {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidInputError';
  }
}
