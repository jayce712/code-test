/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = function (s) {
  return s.replace(/\s/g, '%20');
};

describe('test', () => {
  it('test', () => {
    const str = "We are happy.";
    const res = "We%20are%20happy.";

    expect(replaceSpace(str)).toEqual(res);
  });
})