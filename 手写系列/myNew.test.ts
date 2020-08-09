function myNew(fn, ...rest) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, rest);
  return result instanceof Object ? result : obj;
};

describe('new', () => {
  function Person(name) {
    this.name = name;
  };
  Person.prototype.change = function () {
    this.name = 'test';
  };
  const fn = myNew(Person, 'me');

  it('test property', () => {
    expect(fn).toHaveProperty('name');
    expect(fn.name).toEqual('me');
  });

  it('test prototype', () => {
    expect(fn).toHaveProperty('change');
    fn.change();
    expect(fn.name).toEqual('test');
  });
})