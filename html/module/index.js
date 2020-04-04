import { count, add, getCount, obj } from './count.js';

console.log('count:', count);
console.log('getCount', getCount());
add();
console.log('count:', count);
console.log('getCount', getCount());

obj.name = 'changed';
obj.add = add;
console.log('obj:', obj);