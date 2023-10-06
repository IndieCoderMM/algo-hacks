# Binary Search

You are given a sorted array of integers in ascending order. Your task is to implement a binary search algorithm to find the target value efficiently. If the target is found in the array, return its index; otherwise, return -1.

**Input:**

- `nums (1 <= len(nums) <= 10^4)`: A sorted array of integers in ascending order.
- `target (-10^4 <= target <= 10^4)`: The target value to be searched for in the array.

**Output:**

Returns the index of the target in the nums array if found; otherwise, returns -1.


**Example**

```py
nums = [-1, 0, 3, 5, 9, 12]
target = 9
result = binary_search(nums, target)
# Output: 4 (The target 9 is found at index 4 in the array.)
```

**Constraints:**

- You must implement an algorithm with O(log n) runtime complexity.
- The input array nums is guaranteed to be sorted in ascending order.