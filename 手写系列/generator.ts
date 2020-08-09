export function spawn(genF: any) {
  return new Promise((reslove, reject) => {
    const g = genF();
    const step = (data?: any) => {
      try {
        const r = g.next(data);
        if (r.done) {
          reslove(r.value);
        } else {
          Promise.resolve(r.value).then(value => {
            step(value);
          }).catch(e => {
            reject(e);
          });
        }
      } catch (e) {
        reject(e);
      }
    }
    step();
  });
}