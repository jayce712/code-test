export default function multiple(num: number) {
  if (num < 1 || num > 100) {
    return '';
  };
  const isMultiple3 = num % 3 === 0;
  const isMultiple5 = num % 5 === 0;
  if (isMultiple3 && isMultiple5) {
    return 'bugfix';
  };
  if (isMultiple3) {
    return 'bug';
  };
  if (isMultiple5) {
    return 'fix';
  }
  return '';
}