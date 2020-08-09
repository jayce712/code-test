import mulriple from './mulriple';

describe('multiple 3 or 5', () => {
  it('multiple 3', () => {
    expect(mulriple(3)).toEqual('bug');
    expect(mulriple(6)).toEqual('bug');
  });
  it('multiple 5', () => {
    expect(mulriple(5)).toEqual('fix');
    expect(mulriple(10)).toEqual('fix');
  });
  it('multiple 15', () => {
    expect(mulriple(15)).toEqual('bugfix');
    expect(mulriple(30)).toEqual('bugfix');
  });
  it('multiple', () => {
    expect(mulriple(7)).toEqual('');
    expect(mulriple(8)).toEqual('');
  });
})
