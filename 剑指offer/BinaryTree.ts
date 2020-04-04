export class BinaryTreeNode {
  key: number;

  value: any;

  left: BinaryTreeNode | null = null;

  right: BinaryTreeNode | null = null;

  parent: BinaryTreeNode | null = null;


  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class BinaryTree {
  root: BinaryTreeNode | null = null;

  size() {
    return this._size(this.root);
  }

  _size(node: BinaryTreeNode | null) {
    if (node) {
      return 1 + this._size(node.left as BinaryTreeNode) + this._size(node.right as BinaryTreeNode);
    }
    return 0
  }

  /**
   * 插入
   * @param {*} key
   * @param {*} [value=null]
   * @returns
   * @memberof BinaryTree
   */
  insert(key, value = key) {
    const node = new BinaryTreeNode(key, value);
    let parent = this.root;
    if (!parent) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      parent = current;
      if (node.key < current.key) {
        current = current.left as BinaryTreeNode;
      } else {
        current = current.right as BinaryTreeNode;
      }
    }

    if (node.key < parent.key) {
      parent.left = node;
    } else {
      parent.right = node;
    }
    // eslint-disable-next-line no-param-reassign
    node.parent = parent;
  }

  /**
   * 搜索
   * @param {*} key
   * @returns
   * @memberof BinaryTree
   */
  search(key) {
    let current = this.root;
    if (!current) {
      return null;
    }
    while (current && current.key !== key) {
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }

  /**
   * 先序遍历
   * 自己 --> 左节点 --> 右节点
   *        10
   *    8       12
   *  7   9  11   13
   * 输出 10 -> 8 -> 7 -> 9 -> 12 -> 11 -> 13
   * @memberof BinaryTree
   */
  preOrder() {
    return this._preOrder(this.root);
  }

  _preOrder(node: BinaryTreeNode | null) {
    let arr: any[] = [];
    if (node) {
      arr = arr.concat(
        node.value,
        this._preOrder(node.left),
        this._preOrder(node.right)
      );
    }
    return arr;
  }

  /**
   * 中序遍历
   * 左节点 --> 自己 --> 右节点
   *        10
   *    8       12
   *  7   9  11   13
   * 输出 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13
   * @memberof BinaryTree
   */
  inOrder() {
    return this._inOrder(this.root);
  }

  _inOrder(node: BinaryTreeNode | null) {
    let arr: any[] = [];
    if (node) {
      arr = arr.concat(
        this._inOrder(node.left),
        node.value,
        this._inOrder(node.right)
      );
    }
    return arr;
  }

  /**
   * 后序遍历
   * 左节点 --> 右节点 --> 自己
   *        10
   *    8       12
   *  7   9  11   13
   * 输出 7 -> 9 -> 8 -> 11 -> 13 -> 12 -> 10
   * @memberof BinaryTree
   */
  postOrder() {
    return this._postOrder(this.root);
  }

  _postOrder(node: BinaryTreeNode | null) {
    let arr: any[] = [];
    if (node) {
      arr = arr.concat(
        this._postOrder(node.left),
        this._postOrder(node.right),
        node.value
      );
    }
    return arr;
  }
}