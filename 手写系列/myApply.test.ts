/* eslint-disable */
Function.prototype['myApply'] = function (context, args) {
  if (context === null || context === undefined) {
    context = window;
  }
  context.fn = this;
  let result;
  if (args && args.length > 0) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

describe('test', () => {
  it('test', () => {
    function test(...args) {
      this.name = 'test';
      args.forEach(v => {
        this[v] = v;
      });
    }
    const obj = {
      name: 'obj',
    };
    test['myApply'](obj, ['a', 'b']);
    expect(obj).toMatchObject({ name: 'test', a: 'a', b: 'b' })
  });
});