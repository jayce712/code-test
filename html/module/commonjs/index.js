const { count, add, getCount, obj } = require('./count');

console.log('count:', count);
console.log('getCount', getCount());
add();
console.log('count:', count);
console.log('getCount', getCount());

obj.name = 'changed';
obj.add = add;
console.log('obj:', obj);

setTimeout(() => {
  // eslint-disable-next-line global-require
  require('./changed');
}, 2000);