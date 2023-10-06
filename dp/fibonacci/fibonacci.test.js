import fibonacci from './fibonacci';

describe('Fibonacci Sequence', () => {
  it('should calculate the Fibonacci number for small inputs', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });

  it('should calculate the Fibonacci number for larger inputs', () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(20)).toBe(6765);
    expect(fibonacci(30)).toBe(832040);
  });
});
