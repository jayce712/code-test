import PromiseA from './PromiseA';

describe('test', () => {
  it('PromiseA.all', () => {
    const promise1 = PromiseA.resolve(1);
    const promise2 = 2;
    const promise3 = new PromiseA((resolve) => {
      setTimeout(resolve, 100, 3);
    });

    PromiseA.all([promise1, promise2, promise3]).then(values => {
      expect(values.toString()).toEqual([1, 2, 3].toString());
    });
  });

  it('PromiseA.race', () => {
    const promise1 = new PromiseA((resolve) => {
      setTimeout(resolve, 100, 1);
    });
    const promise2 = new PromiseA((resolve) => {
      setTimeout(resolve, 200, 2);
    });
    const promise3 = new PromiseA((resolve) => {
      setTimeout(resolve, 300, 3);
    });
    PromiseA.race([promise1, promise2, promise3]).then(value => {
      expect(value).toEqual(1);
    });
  });
});