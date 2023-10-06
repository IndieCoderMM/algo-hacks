const binarySearch = (sortedArr, target) => {
  let left = 0;
  let right = sortedArr.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (sortedArr[mid] === target) {
      return mid;
    }

    if (sortedArr[mid] > target) {
      right = mid - 1;
    } else left = mid + 1;
  }

  return -1;
};

export default binarySearch;
