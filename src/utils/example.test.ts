import { describe, it, expect } from 'vitest';

describe('Basic test suite', () => {
  it('should pass a simple test', () => {
    console.log('Running a basic test to verify GitHub Actions workflow');
    expect(true).toBe(true);
  });

  it('should handle basic math operations', () => {
    console.log('Testing basic math operations');
    expect(1 + 1).toBe(2);
    expect(5 - 2).toBe(3);
  });
});
