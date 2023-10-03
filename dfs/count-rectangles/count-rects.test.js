import countRectagles from './count-rects';

describe('Counting Rectangles', () => {
  it('should count all isolated rectangles', () => {
    const array1 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
    ];
    expect(countRectagles(array1)).toEqual(6);
  });

  it('should work for matrix with arbitary dimensions', () => {
    const array2 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1],
    ];
    expect(countRectagles(array2)).toEqual(8);
  });

  it('should not count deformed shapes', () => {
    const array3 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
    ];
    expect(countRectagles(array3)).toEqual(5);
  });
});
