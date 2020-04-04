// 先进先出；FIFO;
const CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  // return this.inStack.shift() || -1;

  const { inStack, outStack } = this;
  if (outStack.length > 0) {
    return outStack.pop();
  }
  while (inStack.length) {
    outStack.push(inStack.pop());
  }
  return outStack.pop() || -1;
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/

describe('test', () => {
  it('test', () => {
    const queue = new CQueue();
    expect(queue.deleteHead()).toEqual(-1);
    queue.appendTail('1');
    queue.appendTail('2');
    expect(queue.deleteHead()).toEqual('1');
    queue.appendTail('3');
    queue.appendTail('4');
    expect(queue.deleteHead()).toEqual('2');
  });
})