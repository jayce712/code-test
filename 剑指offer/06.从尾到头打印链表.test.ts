import { LinkList } from './LinkList';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
  const arr: any[] = [];
  let current = head;
  while (current) {
    arr.unshift(current.val);
    current = current.next;
  }
  return arr;
};

describe('test', () => {
  it('test', () => {
    const data = new LinkList();
    const arr = [1, 2, 3, 4, 5, 6];
    arr.forEach(num => {
      data.append(num);
    })

    expect(reversePrint(data.head).toString()).toEqual(arr.reverse().toString());
  });
})