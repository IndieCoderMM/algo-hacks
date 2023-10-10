import lomutoPartition from './lomuto';

describe('Lomuto Partition', () => {
  it('should partition a simple array', () => {
    const arr1 = [3, 1, 4, 2, 6, 5];
    const pivotIndex1 = lomutoPartition(arr1, 0, arr1.length - 1);

    expect(arr1).toEqual([3, 1, 4, 2, 5, 6]);
    expect(pivotIndex1).toBe(4);

    const arr2 = [5, 4, 3, 2, 1];
    const pivotIndex2 = lomutoPartition(arr2, 0, arr2.length - 1);

    expect(arr2).toEqual([1, 4, 3, 2, 5]);
    expect(pivotIndex2).toBe(0);
  });

  it('should handle arrays with duplicate elements', () => {
    const arr3 = [4, 1, 4, 2, 1, 4];
    const pivotIndex3 = lomutoPartition(arr3, 0, arr3.length - 1);

    expect(arr3).toEqual([1, 2, 1, 4, 4, 4]);
    expect(pivotIndex3).toBe(3);

    const arr4 = [2, 2, 2, 2, 2];
    const pivotIndex4 = lomutoPartition(arr4, 0, arr4.length - 1);

    expect(arr4).toEqual([2, 2, 2, 2, 2]);
    expect(pivotIndex4).toBe(0);
  });

  it('should handle edge cases', () => {
    const arr5 = [];
    const pivotIndex5 = lomutoPartition(arr5, 0, arr5.length - 1);

    expect(arr5).toEqual([]);
    expect(pivotIndex5).toBe(-1);

    const arr6 = [7];
    const pivotIndex6 = lomutoPartition(arr6, 0, arr6.length - 1);

    expect(arr6).toEqual([7]);
    expect(pivotIndex6).toBe(0);
  });
});
