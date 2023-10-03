const key = (item) => {
  return item.key;
};

const insertionSort = (arr) => {
  const output = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && key(arr[j]) > key(current)) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = current;

    output.push([...arr]);
  }

  return output;
};

export default insertionSort;
