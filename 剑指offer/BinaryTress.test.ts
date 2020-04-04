import { BinaryTree } from './BinaryTree';

describe('BinaryTree test', () => {
  const tree = new BinaryTree();
  const arr = [10, 7, 6, 9, 8, 12, 11, 14, 13,];
  arr.forEach(num => {
    tree.insert(num);
  })

  it('size', () => {
    expect(tree.size()).toEqual(arr.length);
  });

  it('inOrder 中序', () => {
    expect(tree.inOrder().toString()).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14].toString());
  });
  it('preOrder 先序', () => {
    expect(tree.preOrder().toString()).toEqual([10, 7, 6, 9, 8, 12, 11, 14, 13].toString());
  });
  it('postOrder 后序', () => {
    expect(tree.postOrder().toString()).toEqual([6, 8, 9, 7, 11, 13, 14, 12, 10].toString());
  });
});