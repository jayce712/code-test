/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = function (numbers) {
  return Math.min(...numbers);
};

describe('test', () => {
  const arr = Array.from({ length: 100 })
    .map(() => Math.ceil(Math.random() * 100))
    .sort((a, b) => a - b);
  const testArr = [...arr.slice(10), ...arr.slice(0, 10)];
  const min = Math.min(...testArr);
  it('test', () => {
    expect(minArray(testArr)).toBe(min);
  });
})
