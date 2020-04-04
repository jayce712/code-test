/*
* 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
* 
* 第0个台阶f(0) ：1 （不跳）
* 第1个台阶f(1) ：1 （跳1次）
* 第2个台阶f(2) ：2 （跳1，1或者2）
* 第3个台阶f(3) ：两种情况，最后跳1或者跳2，
* 最后跳1：上一个台阶是2，有f(2)种
* 最后跳2：上一个台阶是1，有f(1)种
* 第n个台阶 ：两种情况，最后跳1或者跳2
* 最后跳1：上一个台阶是n-1，有f(n-1)种
* 最后跳2：上一个台阶是n-2，有f(n-2)种
* 通项公式 ：f(n) = f(n-2) + f(n-1)
*/

/**
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % (1e9 + 7);
  }
  return arr[n];
};

describe('test', () => {
  it('test', () => {
    expect(numWays(0)).toEqual(1);
    expect(numWays(1)).toEqual(1);
    expect(numWays(2)).toEqual(2);
    expect(numWays(3)).toEqual(3);
    expect(numWays(4)).toEqual(5);
    expect(numWays(5)).toEqual(8);
  });
});