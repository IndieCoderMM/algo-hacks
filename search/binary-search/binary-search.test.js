import binarySearch from './binary-search';

describe('Binary Search', () => {
  it('should find the index of target item', () => {
    // Target at the middle
    const nums1 = [-1, 0, 3, 5, 9, 12];
    const target1 = 5;

    // Target at the start
    const nums2 = [-1, 0, 3, 5, 9, 12];
    const target2 = -1;

    // Target found at the end
    const nums3 = [-1, 0, 3, 5, 9, 12];
    const target3 = 12;
    const result1 = binarySearch(nums1, target1);
    const result2 = binarySearch(nums2, target2);
    const result3 = binarySearch(nums3, target3);

    expect(result1).toBe(3);
    expect(result2).toBe(0);
    expect(result3).toBe(5);
  });

  it('should find the index of the target item in a large array', () => {
    // Large array with target in the middle
    const nums1 = Array.from({ length: 10000 }, (_, i) => i);
    const target1 = 500;

    // Large array with target at the start
    const nums2 = Array.from({ length: 10000 }, (_, i) => i);
    const target2 = 0;

    // Large array with target at the end
    const nums3 = Array.from({ length: 10000 }, (_, i) => i);
    const target3 = 9999;

    // Large array with target not found
    const nums4 = Array.from({ length: 10000 }, (_, i) => i);
    const target4 = 20000;

    // Large array with target not found (negative target)
    const nums5 = Array.from({ length: 10000 }, (_, i) => i);
    const target5 = -100;

    const result1 = binarySearch(nums1, target1);
    const result2 = binarySearch(nums2, target2);
    const result3 = binarySearch(nums3, target3);
    const result4 = binarySearch(nums4, target4);
    const result5 = binarySearch(nums5, target5);

    expect(result1).toBe(500);
    expect(result2).toBe(0);
    expect(result3).toBe(9999);
    expect(result4).toBe(-1);
    expect(result5).toBe(-1);
  });
});
