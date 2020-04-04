import { LinkList } from './LinkList';

describe('LinkList test', () => {
  it('append && insert', () => {
    const linkList = new LinkList();
    const arr = [1, 2, 3];
    arr.forEach(num => {
      linkList.append(num);
    })
    expect(linkList.size()).toEqual(arr.length);
    expect(linkList.toString()).toEqual(arr.join(''));

    expect(linkList.insert(0, 0)).toBeFalsy();
    expect(linkList.size()).toEqual(3);
    expect(linkList.toString()).toEqual('123');

    expect(linkList.insert(4, 4)).toBeTruthy();
    expect(linkList.size()).toEqual(4);
    expect(linkList.toString()).toEqual('1234');

    linkList.insert('s', 2);
    expect(linkList.size()).toEqual(5);
    expect(linkList.toString()).toEqual('12s34');
  });
  it('find && findIndex', () => {
    const linkList = new LinkList();
    const arr = [1, 2, 3];
    arr.forEach(num => {
      linkList.append(num);
    });
    expect(linkList.find(0)).toBeFalsy();
    expect(linkList.find(2)).toBeTruthy();
    expect(linkList.indexOf(2)).toEqual(1);
    expect(linkList.indexOf(5)).toEqual(-1);
  });
  it('remove && removeAt', () => {
    const linkList = new LinkList();
    const arr = [1, 2, 3, 4, 5, 6];
    arr.forEach(num => {
      linkList.append(num);
    });
    expect(linkList.remove(-1)).toBeFalsy();
    expect(linkList.remove(2)).toBeTruthy();
    expect(linkList.toString()).toEqual('13456');
    expect(linkList.size()).toEqual(5);

    expect(linkList.removeAt(-1)).toBeFalsy();
    expect(linkList.removeAt(10)).toBeFalsy();
    expect(linkList.removeAt(2)).toBeTruthy();
    expect(linkList.toString()).toEqual('1356');
    expect(linkList.size()).toEqual(4);
  });
});