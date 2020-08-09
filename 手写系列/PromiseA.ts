/* eslint-disable no-param-reassign */
enum STATUS {
  PENDING,
  FULFILLED,
  REJECTED,
}

class PromiseA<T = any> {
  /**
   * for test
   * @static
   * @memberof PromiseA
   */
  static deferred = () => {
    const dfd: any = {};
    dfd.promise = new PromiseA((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
    });
    return dfd;
  };

  static resolve(value) {
    if (value instanceof PromiseA) {
      return value;
    }
    return new PromiseA((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new PromiseA((resolve, reject) => {
      reject(reason);
    });
  }

  static race(promises: PromiseA[]) {
    return new PromiseA((resolve, reject) => {
      if (promises.length === 0) return;
      promises.forEach(p => {
        p.then(resolve, reject);
      });
    })
  }

  static all(promises: (PromiseA | any)[]) {
    return new PromiseA((resolve, reject) => {
      let len = promises.length;
      if (len === 0) return;
      const result: any[] = [];
      promises.forEach((p, i) => {
        p.then((data) => {
          result[i] = data;
          len--;
          if (len === 0) {
            resolve(result);
          }
        }, reject);
      });
    })
  }

  /** promise status */
  private status: STATUS = STATUS.PENDING;

  /** reslove value */
  private value: T = undefined as any;

  /** save fulfilled callback */
  private onFulfilled: Function[] = [];

  /** rejected reason */
  private reason: any;

  /** save rejected callback */
  private onRejected: Function[] = [];

  constructor(executor) {
    const reslove = (value) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.FULFILLED;
        this.value = value;
        this.onFulfilled.forEach(fn => fn(this.value));
      }
    };
    const reject = (reason) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;
        this.onRejected.forEach(fn => fn(this.reason));
      }
    };
    try {
      executor(reslove, reject);
    } catch (e) {
      reject(e);
    }
  }

  private resolvePromise(promise, x, reslove, reject) {
    if (promise === x) {
      reject(new TypeError('循环引用'));
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      // PromiseA+2.3.3.3.3 只能调用一次
      let used;
      try {
        const { then } = x;
        if (typeof then === 'function') {
          then.call(x, y => {
            if (used) return;
            used = true;
            this.resolvePromise(promise, y, reslove, reject);
          }, r => {
            if (used) return;
            used = true;
            reject(r);
          });
        } else {
          if (used) return;
          used = true;
          reslove(x);
        }
      } catch (e) {
        if (used) return;
        used = true;
        reject(e);
      }
    } else {
      reslove(x);
    }
  }

  /**
   * promise必须提供一个then方法，来访问最终的结果
   * @param onFulfilled 可选，必须为函数类型
   * @param onRejected 可选，必须为函数类型
   * @returns promise
   */
  public then(onFulfilled?, onRejected?): PromiseA {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v => v);
    onRejected = typeof onRejected === 'function' ? onRejected : (err => { throw err });

    const promise = new PromiseA((reslove, reject) => {
      if (this.status === STATUS.FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            this.resolvePromise(promise, x, reslove, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (this.status === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            this.resolvePromise(promise, x, reslove, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (this.status === STATUS.PENDING) {
        this.onFulfilled.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              this.resolvePromise(promise, x, reslove, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejected.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              this.resolvePromise(promise, x, reslove, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return promise;
  }

  public catch(fn) {
    return this.then(null, fn);
  }

  public finally(callback) {
    return this.then((value) => {
      return Promise.resolve(callback()).then(() => value);
    }, (err) => {
      return Promise.resolve(callback()).then(() => { throw err; });
    });
  }
}

/** 
 * Link:https://www.cnblogs.com/zhouyangla/p/10781697.html
 */
module.exports = PromiseA;
export default PromiseA;