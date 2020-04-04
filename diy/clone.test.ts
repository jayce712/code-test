import { deepCloneDFS, deepCloneBFS } from './clone';


const data = {
  info: {
    name: 'lockie',
    nums: [1, 2, 3]
  },
  id: 1,
}

describe('clone', () => {
  it('dfs object clone', () => {
    const newData = deepCloneDFS(data);
    expect(data).not.toBe(newData);
    expect(data).toEqual(newData);

    newData.info.nums.unshift(0);
    expect(data).not.toEqual(newData);
  });

  it('bfs object clone', () => {
    const newData = deepCloneBFS(data);
    expect(data).not.toBe(newData);
    expect(data).toEqual(newData);

    newData.info.nums.unshift(0);
    expect(data).not.toEqual(newData);
  });
});