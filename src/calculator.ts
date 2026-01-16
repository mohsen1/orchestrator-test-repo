/**
 * Core calculator functions with input validation
 */

import type { CalculatorFunction } from './types.js';

/**
 * Validates that both inputs are valid numbers
 * @param a - First operand
 * @param b - Second operand
 * @throws {Error} If either input is NaN or not a number
 */
function validateInputs(a: number, b: number): void {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Inputs cannot be NaN');
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Inputs must be finite numbers');
  }
}

/**
 * Adds two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 * @throws {Error} If inputs are invalid
 */
export const add: CalculatorFunction = (a: number, b: number): number => {
  validateInputs(a, b);
  return a + b;
};

/**
 * Subtracts the second number from the first
 * @param a - First number
 * @param b - Second number
 * @returns The difference of a and b
 * @throws {Error} If inputs are invalid
 */
export const subtract: CalculatorFunction = (a: number, b: number): number => {
  validateInputs(a, b);
  return a - b;
};

/**
 * Multiplies two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The product of a and b
 * @throws {Error} If inputs are invalid
 */
export const multiply: CalculatorFunction = (a: number, b: number): number => {
  validateInputs(a, b);
  return a * b;
};

/**
 * Divides the first number by the second
 * @param a - Dividend
 * @param b - Divisor
 * @returns The quotient of a and b
 * @throws {Error} If inputs are invalid or if dividing by zero
 */
export const divide: CalculatorFunction = (a: number, b: number): number => {
  validateInputs(a, b);
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};
