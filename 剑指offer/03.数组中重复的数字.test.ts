/** 通过hash记录
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[num]) {
      return num;
    }
    hash[num] = true;
  }
};

describe('test', () => {
  it('test', () => {
    const nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    expect(findRepeatNumber(nums)).toEqual(4);
  });
});
