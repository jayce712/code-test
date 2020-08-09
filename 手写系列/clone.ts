const isType = (value, type) => Object.prototype.toString.call(value) === `[object ${type}]`;

const isArray = value => isType(value, 'Array');
const isObject = value => isType(value, 'Object');

function deepCloneDFS(data, wm = new WeakMap()) {
  if (isArray(data) || isObject(data)) {
    let result;
    if (wm.has(data)) {
      result = wm.get(data);
    } else {
      result = isArray(data) ? [] : {};
      wm.set(data, result);
      Object.keys(data).forEach(key => {
        result[key] = deepCloneDFS(data[key], wm);
      });
    }
    return result;
  }
  return data;
}

function deepCloneBFS(data): any {
  const result = isObject(data) ? {} : [];
  const stack: any[] = [[data, result]];
  const wm = new WeakMap();
  while (stack.length) {
    // eslint-disable-next-line prefer-const
    let [origin, target] = stack.shift();
    if (wm.has(origin)) {
      target = wm.get(origin);
    } else {
      wm.set(origin, target);
      Object.keys(origin).forEach(key => {
        if (isObject(origin[key]) || isArray(origin[key])) {
          target[key] = isObject(origin[key]) ? {} : [];
          stack.push([origin[key], target[key]]);
        } else {
          target[key] = origin[key];
        }
      });
    }
  }
  return result;
}

export { deepCloneDFS, deepCloneBFS };