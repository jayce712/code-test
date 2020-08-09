export function filter(arr1: number[], arr2: number[]) {
  return arr1.filter(v => !arr2.includes(v));
}

export function filter2(arr1: number[], arr2: number[]) {
  return arr1.filter(v => arr2.indexOf(v) === -1);
}

export function filter3(arr1: number[], arr2: number[]) {
  return arr1.reduce((memo, value) => {
    if (arr2.indexOf(value) === -1) {
      memo.push(value);
    }
    return memo;
  }, [] as number[]);
}