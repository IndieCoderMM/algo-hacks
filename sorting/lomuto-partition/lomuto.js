/**
 * @description Partitions the input array using the Lomuto Partition Scheme.
 * @param {number[]} nums - The input array of integers.
 * @param {number} start - The starting index for the partitioning.
 * @param {number} end - The ending index for the partitioning.
 * @returns {number} - The index of the pivot element in its final sorted position.
 */
const lomutoPartition = (arr, start = 0, end = arr.length - 1) => {
  if (arr.length === 0) return -1;

  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i += 1;
  [arr[i], arr[end]] = [arr[end], arr[i]];

  return i;
};

export default lomutoPartition;
