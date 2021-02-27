export const BITS_PER_CHAR = 5;
export const BITS_PER_ROW = 15;

export const splitEvery = (size, arr, result = []) => {
  return arr.length === 0
    ? result
    : splitEvery(size, arr.slice(size), result.concat([arr.slice(0, size)]));
};

export const charToNum = (char) => {
  return charMap.get(char);
};

export const numToBin = (num) => {
  return (num >>> 0).toString(2);
};

export const padLeft = (arr, value, length) => {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  while (arrCopy.length < length) {
    arrCopy.unshift(value);
  }
  return arrCopy;
};

export const padRight = (arr, value, length) => {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  while (arrCopy.length < length) {
    arrCopy.push(value);
  }
  return arrCopy;
};

const charMap = new Map([
  ['', 0],
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
  ['f', 6],
  ['g', 7],
  ['h', 8],
  ['i', 9],
  ['', 10],
  ['k', 11],
  ['l', 12],
  ['m', 13],
  ['n', 14],
  ['o', 15],
  ['p', 16],
  ['q', 17],
  ['r', 18],
  ['s', 19],
  ['t', 20],
  ['u', 21],
  ['v', 22],
  ['w', 23],
  ['x', 24],
  ['y', 25],
  ['z', 26],
  [' ', 27],
  [':', 28],
  ['.', 29],
  ['/', 30],
  ['?', 31],
]);
