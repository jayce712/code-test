/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % (1e9 + 7);
  }
  return arr[n];
};

describe('test', () => {
  it('test', () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(5)).toEqual(5);
  });
});