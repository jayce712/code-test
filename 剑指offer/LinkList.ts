export class LinkNode {
  val: any;

  next: LinkNode | null;

  constructor(value, next?) {
    this.val = value;
    this.next = next || null;
  }
}

export class LinkList {
  head: LinkNode | null;

  length: number;

  constructor(value?) {
    this.head = value ? new LinkNode(value, null) : null;
    this.length = 0;
  }

  /** 查找节点 */
  find(index: number) {
    if (index > 0) {
      let current = this.head;
      for (let i = 1; i < index; i++) {
        current = current?.next as LinkNode;
      }
      return current;
    }
    return null;
  }

  /**
   * 查找index
   * @param {*} value
   * @returns
   * @memberof LinkList
   */
  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.val === value) {
        return index;
      }
      current = current.next;
      index++;

    }
    return -1;
  }

  /**
   * 向尾部添加节点
   * @param {*} value
   * @returns
   * @memberof LinkList
   */
  append(value) {
    const node = new LinkNode(value, null);
    if (!this.head) {
      this.head = node;
    } else {
      const current = this.find(this.length) as LinkNode;
      current.next = node;
    }
    this.length++;
    return true;
  }


  /**
   * 在任意位置插入链表
   * 大于0才插入，大于长度就插入到末尾
   * @param {*} value
   * @param {*} index
   * @memberof LinkList
   */
  insert(value, index) {
    if (index > 0) {
      const prev = this.find(index > this.length ? this.length : index) as LinkNode;
      prev.next = new LinkNode(value, prev.next);
      this.length++;
      return true;
    }
    return false;

  }

  /**
   * 通过index删除节点
   * @param {*} index
   * @returns
   * @memberof LinkList
   */
  removeAt(index) {
    if (index > 0 && index <= this.length) {
      let current = this.head;
      let prev;
      let i = 0;
      while (i < index) {
        i++;
        prev = current;
        current = current?.next as LinkNode;
      }
      prev.next = current?.next;
      this.length--;
      return current?.val;
    }
    return null;
  }

  /**
   * 删除节点
   * @param {*} value
   * @returns
   * @memberof LinkList
   */
  remove(value) {
    let current = this.head;
    let prev;
    while (current) {
      if (current.val === value) {
        prev.next = current.next;
        this.length--;
        return current.val;
      }
      prev = current;
      current = current.next;

    }
    return null;
  }

  /**
   * 拼接为字符串返回
   * @returns
   * @memberof LinkList
   */
  toString() {
    let str = '';
    let current = this.head;
    while (current) {
      str += current.val;
      current = current.next;
    }
    return str;
  }

  /**
   * 返回链表长度
   * @returns
   * @memberof LinkList
   */
  size() {
    return this.length;
  }
}