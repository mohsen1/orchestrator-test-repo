/**
 * Type definitions for the calculator module
 */

/**
 * Supported arithmetic operations
 */
export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

/**
 * Operator symbols corresponding to operations
 */
export type Operator = '+' | '-' | '*' | '/';

/**
 * Calculator function signature
 */
export type CalculatorFunction = (a: number, b: number) => number;

/**
 * Map of operators to their operation names
 */
export type OperatorMap = {
  [K in Operator]: Operation;
};

/**
 * Result of a calculation
 */
export interface CalculationResult {
  operation: Operation;
  operands: [number, number];
  result: number;
}
