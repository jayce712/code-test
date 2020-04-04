// eslint-disable-next-line import/no-mutable-exports
export let count = 0;
export function add() {
  count++;
}
export function getCount() {
  return count;
}

export const obj = {
  name: 'obj',
}

setTimeout(() => {
  console.log('setTimeout');
  console.log('count:', count);
  console.log('obj:', obj);
}, 1000);