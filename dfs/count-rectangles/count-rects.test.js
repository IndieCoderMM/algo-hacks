import countRectangles from './count-rects';

describe('Counting Rectangles', () => {
  it('should count all isolated rectangles', () => {
    const matrix1 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
    ];
    expect(countRectangles(matrix1)).toEqual(6);

    const matrix2 = [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
    ];
    expect(countRectangles(matrix2)).toEqual(15);

    const matrix3 = [
      [1, 1, 1, 0, 1],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1],
    ];
    expect(countRectangles(matrix3)).toEqual(8);
  });

  it('should work for irregular matrix with arbitary dimensions', () => {
    const matrix1 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1],
    ];
    expect(countRectangles(matrix1)).toEqual(8);

    const matrix2 = [
      [1, 0, 1],
      [0, 1],
      [1, 0, 1, 0],
      [0],
      [1, 0, 1, 0, 1, 0],
      [0, 1],
      [1],
      [0, 1, 0],
    ];
    expect(countRectangles(matrix2)).toEqual(11);
  });

  it('should not count deformed shapes', () => {
    const matrix1 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
    ];
    expect(countRectangles(matrix1)).toEqual(5);

    const matrix2 = [
      [1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0],
    ];
    expect(countRectangles(matrix2)).toEqual(2);

    const matrix3 = [
      [1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(countRectangles(matrix3)).toEqual(1);
  });

  it('should handle edge case with a large matrix containing no rectangles', () => {
    const largeMatrix = Array.from({ length: 100 }, () => Array(100).fill(0));
    expect(countRectangles(largeMatrix)).toEqual(0);
  });
});
