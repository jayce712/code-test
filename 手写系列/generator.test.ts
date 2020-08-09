import { spawn } from './generator';

describe('test', () => {
  it('test', async () => {
    function* gen() {
      const a = yield 'a';
      const b = yield Promise.resolve('b');
      return [a, b];
    }
    async function gen2() {
      const a = await 'a';
      const b = await Promise.resolve('b');
      return [a, b];
    }

    const res1 = await spawn(gen);
    const res2 = await gen2();
    expect(res1).toMatchObject(res2);
  });
});