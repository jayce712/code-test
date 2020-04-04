import { BinaryTreeNode, BinaryTree } from './BinaryTree';

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const value = preorder[0];
  const root = new BinaryTreeNode(value, value);
  const index = inorder.indexOf(value);
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};


describe('test', () => {
  it('test', () => {
    const tree = new BinaryTree();
    const arr = [10, 7, 6, 9, 8, 12, 11, 13, 14];
    arr.forEach(num => {
      tree.insert(num);
    });

    const preOrder = tree.preOrder();
    const inOrder = tree.inOrder();
    const result = buildTree(preOrder, inOrder);
    expect(tree._inOrder(result).toString()).toEqual(inOrder.toString());
    expect(tree._preOrder(result).toString()).toEqual(preOrder.toString());
  });
})