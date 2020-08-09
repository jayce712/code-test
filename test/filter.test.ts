import { filter, filter2, filter3 } from './filter';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 1, 0, 5];

describe('first array is/are not present in the second array', () => {
  it('filter to be [4]', () => {
    expect(filter(arr1, arr2).toString()).toEqual([4].toString());
  })

  it('filter2 to be [4]', () => {
    expect(filter2(arr1, arr2).toString()).toEqual([4].toString());
  })

  it('filter3 to be [4]', () => {
    expect(filter3(arr1, arr2).toString()).toEqual([4].toString());
  })
})
