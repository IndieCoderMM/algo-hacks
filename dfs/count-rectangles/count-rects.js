export default function countRectagles(arr) {
  let count = 0;
  // Initilize the visited array
  const visited = [];
  for (let row = 0; row < arr.length; row++) {
    const r = [];
    for (let col = 0; col < arr[row].length; col++) {
      r.push(false);
    }
    visited.push(r);
  }

  const floodFill = (row, col) => {
    let minRow = row;
    let minCol = col;
    let maxRow = row;
    let maxCol = col;

    const dfs = (r, c) => {
      if (visited[r][c] || arr[r][c] === 0) return;

      visited[r][c] = true;

      minRow = Math.min(minRow, r);
      minCol = Math.min(minCol, c);
      maxRow = Math.max(maxRow, r);
      maxCol = Math.max(maxCol, c);

      const neighbors = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
      ];
      for (let [dy, dx] of neighbors) {
        const newRow = r + dy;
        const newCol = c + dx;
        if (
          newRow >= 0 &&
          newRow < arr.length &&
          newCol >= 0 &&
          newCol < arr[newRow].length
        ) {
          dfs(newRow, newCol);
        }
      }
    };

    dfs(row, col);

    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        if (arr[r][c] === 0) return;
      }
    }

    count += 1;
  };

  // Iterate over the array and call dfs on each 1
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (visited[row][col]) continue;
      if (arr[row][col] === 1) {
        floodFill(row, col);
      } else visited[row][col] = true;
    }
  }

  return count;
}
