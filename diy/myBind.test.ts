/* eslint-disable */
Function.prototype['myBind'] = function (context, ...args) {
  if (context === null || context === undefined) {
    context = window;
  }
  context.fn = this;
  return function () {
    let result;
    if (args && args.length > 0) {
      result = context.fn(...args);
    } else {
      result = context.fn();
    }
    delete context.fn;
    return result;
  };
}

Function.prototype['myBind2'] = function (context, ...args) {
  const _self = this;
  return function () {
    return _self.apply(context, args);
  };
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
    test['myBind'](obj, 'a', 'b')();
    expect(obj).toMatchObject({ name: 'test', a: 'a', b: 'b' });
    test['myBind2'](obj, 'c')();
    expect(obj).toMatchObject({ name: 'test', a: 'a', b: 'b', c: 'c' });
  });
});