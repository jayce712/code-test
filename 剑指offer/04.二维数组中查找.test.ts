/** 从左下角开始查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function (matrix, target) {
  const xLen = matrix[0] ? matrix[0].length : 0;
  const yLen = matrix.length;
  for (let i = yLen - 1, j = 0; i >= 0 && j < xLen;) {
    if (target > matrix[i][j]) {
      j++;
    } else if (target < matrix[i][j]) {
      i--;
    } else {
      return true;
    }
  }
  return false;
};

describe('test', () => {
  it('test', () => {
    /*
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
    [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
    [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    */
    const n = 10;
    const m = 10;
    const arr: (number[])[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!arr[i]) {
          arr[i] = [];
        }
        arr[i][j] = (i + 1) * (j + 1);
      }
    }


    expect(findNumberIn2DArray(arr, 50)).toBeTruthy();
    expect(findNumberIn2DArray(arr, 51)).toBeFalsy();
  })
})