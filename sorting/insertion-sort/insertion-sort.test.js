import insertionSort from './insertion-sort';

describe('Insertion Sort', () => {
  it('should sort the array of objects step-by-step', () => {
    const arr = [
      { key: 3, value: 'cherry' },
      { key: 2, value: 'banana' },
      { key: 1, value: 'apple' },
    ];
    const ans = insertionSort([...arr]);
    const expectedSteps = [
      arr,
      [
        { key: 2, value: 'banana' },
        { key: 3, value: 'cherry' },
        { key: 1, value: 'apple' },
      ],
      [
        { key: 1, value: 'apple' },
        { key: 2, value: 'banana' },
        { key: 3, value: 'cherry' },
      ],
    ];
    expect(JSON.stringify(ans)).toBe(JSON.stringify(expectedSteps));
  });

  it('should retain order for duplicate keys', () => {
    const arr = [
      { key: 3, value: 'cherry' },
      { key: 2, value: 'banana' },
      { key: 1, value: 'apple' },
      { key: 3, value: 'date' },
      { key: 1, value: 'apricot' },
    ];
    const ans = insertionSort([...arr]);
    const expectedSteps = [
      arr,
      [
        { key: 2, value: 'banana' },
        { key: 3, value: 'cherry' },
        { key: 1, value: 'apple' },
        { key: 3, value: 'date' },
        { key: 1, value: 'apricot' },
      ],
      [
        { key: 1, value: 'apple' },
        { key: 2, value: 'banana' },
        { key: 3, value: 'cherry' },
        { key: 3, value: 'date' },
        { key: 1, value: 'apricot' },
      ],
      [
        { key: 1, value: 'apple' },
        { key: 2, value: 'banana' },
        { key: 3, value: 'cherry' },
        { key: 3, value: 'date' },
        { key: 1, value: 'apricot' },
      ],
      [
        { key: 1, value: 'apple' },
        { key: 1, value: 'apricot' },
        { key: 2, value: 'banana' },
        { key: 3, value: 'cherry' },
        { key: 3, value: 'date' },
      ],
    ];
    expect(JSON.stringify(ans)).toBe(JSON.stringify(expectedSteps));
  });
});
