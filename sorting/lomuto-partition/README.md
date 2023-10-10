# Implement Lomuto Partition for Quicksort

You are given an array of integers, and your task is to implement the *Lomuto Partition Scheme* for the quicksort algorithm.

The Lomuto Partition Scheme works as follows:

- Choose the last element as the pivot.
- Rearrange the elements in the array such that all elements less than or equal to the pivot come before the pivot, and all elements greater than the pivot come after the pivot.
Return the index of the pivot element in its final sorted position.

You need to implement the lomutoPartition function that takes an array and partitions it using the Lomuto Partition Scheme. 

*The function should return the index of the pivot element in its final sorted position.*

## Example

```js
const arr = [3, 1, 4, 2, 6, 5];
const pivotIndex = lomutoPartition(arr, 0, arr.length - 1);
console.log(arr); // Output: [3,1,4,2,5,6]
console.log(pivotIndex); // Output: 2
```

> **NOTE**
> You do not need to implement the full quicksort algorithm. Your function should correctly partition the array and return the index of the pivot element in its final sorted position.