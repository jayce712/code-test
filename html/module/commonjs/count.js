// eslint-disable-next-line import/no-mutable-exports
let count = 0;
function add() {
  count++;
}
function getCount() {
  return count;
}

const obj = {
  name: 'obj',
}

setTimeout(() => {
  console.log('setTimeout');
  console.log('count:', count);
  console.log('obj:', obj);
}, 1000);

add();

export default {
  count,
  add,
  getCount,
  obj,
}

add();