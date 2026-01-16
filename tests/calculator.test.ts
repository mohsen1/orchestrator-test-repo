/**
 * Comprehensive unit tests for calculator functions
 */

import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculator Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
      expect(add(1.5, 2.5)).toBe(4);
    });

    it('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
      expect(add(-10, 5)).toBe(-5);
      expect(add(10, -5)).toBe(5);
    });

    it('should handle zero', () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
      expect(add(1.111, 2.222)).toBeCloseTo(3.333);
      expect(add(-0.5, 0.5)).toBe(0);
    });

    it('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
      expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should throw error for NaN inputs', () => {
      expect(() => add(NaN, 5)).toThrow('Inputs cannot be NaN');
      expect(() => add(5, NaN)).toThrow('Inputs cannot be NaN');
      expect(() => add(NaN, NaN)).toThrow('Inputs cannot be NaN');
    });

    it('should throw error for non-finite inputs', () => {
      expect(() => add(Infinity, 5)).toThrow('Inputs must be finite numbers');
      expect(() => add(5, Infinity)).toThrow('Inputs must be finite numbers');
      expect(() => add(-Infinity, 5)).toThrow('Inputs must be finite numbers');
    });

    it('should throw error for non-number inputs', () => {
      expect(() => add('5' as any, 3)).toThrow('Both inputs must be numbers');
      expect(() => add(5, '3' as any)).toThrow('Both inputs must be numbers');
      expect(() => add(null as any, 5)).toThrow('Both inputs must be numbers');
      expect(() => add(undefined as any, 5)).toThrow('Both inputs must be numbers');
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(20, 10)).toBe(10);
      expect(subtract(10.5, 5.5)).toBe(5);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(-10, 5)).toBe(-15);
      expect(subtract(10, -5)).toBe(15);
    });

    it('should handle zero', () => {
      expect(subtract(0, 0)).toBe(0);
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    it('should handle decimal numbers', () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
      expect(subtract(5.555, 2.222)).toBeCloseTo(3.333);
    });

    it('should handle large numbers', () => {
      expect(subtract(3000000, 1000000)).toBe(2000000);
      expect(subtract(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });

    it('should throw error for NaN inputs', () => {
      expect(() => subtract(NaN, 5)).toThrow('Inputs cannot be NaN');
      expect(() => subtract(5, NaN)).toThrow('Inputs cannot be NaN');
    });

    it('should throw error for non-finite inputs', () => {
      expect(() => subtract(Infinity, 5)).toThrow('Inputs must be finite numbers');
      expect(() => subtract(5, -Infinity)).toThrow('Inputs must be finite numbers');
    });

    it('should throw error for non-number inputs', () => {
      expect(() => subtract('5' as any, 3)).toThrow('Both inputs must be numbers');
      expect(() => subtract(5, {} as any)).toThrow('Both inputs must be numbers');
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(10, 5)).toBe(50);
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
      expect(multiply(-10, 5)).toBe(-50);
      expect(multiply(10, -5)).toBe(-50);
    });

    it('should handle zero', () => {
      expect(multiply(0, 0)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(-5, 0)).toBe(-0);
    });

    it('should handle decimal numbers', () => {
      expect(multiply(0.5, 0.5)).toBe(0.25);
      expect(multiply(1.5, 2)).toBe(3);
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });

    it('should handle large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
      expect(multiply(100000, 10)).toBe(1000000);
    });

    it('should throw error for NaN inputs', () => {
      expect(() => multiply(NaN, 5)).toThrow('Inputs cannot be NaN');
      expect(() => multiply(5, NaN)).toThrow('Inputs cannot be NaN');
    });

    it('should throw error for non-finite inputs', () => {
      expect(() => multiply(Infinity, 5)).toThrow('Inputs must be finite numbers');
      expect(() => multiply(5, Infinity)).toThrow('Inputs must be finite numbers');
    });

    it('should throw error for non-number inputs', () => {
      expect(() => multiply([] as any, 3)).toThrow('Both inputs must be numbers');
      expect(() => multiply(5, true as any)).toThrow('Both inputs must be numbers');
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(20, 4)).toBe(5);
      expect(divide(10, 2.5)).toBe(4);
    });

    it('should divide negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
    });

    it('should handle zero dividend', () => {
      expect(divide(0, 5)).toBe(0);
      expect(divide(0, -5)).toBe(-0);
    });

    it('should handle decimal numbers', () => {
      expect(divide(1, 2)).toBe(0.5);
      expect(divide(1, 3)).toBeCloseTo(0.3333, 4);
      expect(divide(7.5, 2.5)).toBe(3);
    });

    it('should handle large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
      expect(divide(1000000, 0.001)).toBe(1000000000);
    });

    it('should throw error for division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(100, 0)).toThrow('Division by zero is not allowed');
    });

    it('should throw error for NaN inputs', () => {
      expect(() => divide(NaN, 5)).toThrow('Inputs cannot be NaN');
      expect(() => divide(5, NaN)).toThrow('Inputs cannot be NaN');
    });

    it('should throw error for non-finite inputs', () => {
      expect(() => divide(Infinity, 5)).toThrow('Inputs must be finite numbers');
      expect(() => divide(5, Infinity)).toThrow('Inputs must be finite numbers');
      expect(() => divide(-Infinity, 5)).toThrow('Inputs must be finite numbers');
    });

    it('should throw error for non-number inputs', () => {
      expect(() => divide('10' as any, 2)).toThrow('Both inputs must be numbers');
      expect(() => divide(10, '2' as any)).toThrow('Both inputs must be numbers');
    });
  });

  describe('Edge Cases and Special Values', () => {
    it('should handle very small decimal operations', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
      expect(multiply(0.001, 0.001)).toBeCloseTo(0.000001);
    });

    it('should handle negative zero correctly', () => {
      // Note: -0 + 0 = +0 in JavaScript
      expect(add(-0, 0)).toBe(0);
      // -0 - 0 = -0 in JavaScript
      expect(Object.is(subtract(-0, 0), -0)).toBe(true);
      expect(Object.is(multiply(-0, 1), -0)).toBe(true);
    });

    it('should handle operations resulting in same number', () => {
      expect(add(5, 0)).toBe(5);
      expect(subtract(5, 0)).toBe(5);
      expect(multiply(5, 1)).toBe(5);
      expect(divide(5, 1)).toBe(5);
    });

    it('should handle operations resulting in zero', () => {
      expect(subtract(5, 5)).toBe(0);
      expect(multiply(0, 999)).toBe(0);
      expect(divide(0, 999)).toBe(0);
    });

    it('should handle operations with negative results', () => {
      expect(add(-10, 5)).toBe(-5);
      expect(subtract(5, 10)).toBe(-5);
      expect(multiply(-5, 2)).toBe(-10);
      expect(divide(-10, 2)).toBe(-5);
    });
  });
});
