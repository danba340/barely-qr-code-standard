export const splitEvery = (size, arr, result = []) => {
  return arr.length === 0
    ? result
    : splitEvery(size, arr.slice(size), result.concat([arr.slice(0, size)]));
};

const dict = new Map([
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
  ['j', 10],
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

export const charToNumber = (char) => {
  return dict.get(char);
};

export const numberToBin = (number) => {
  const binString = (number >>> 0).toString(2);
  console.log(binString);
  return binString.split('').map((bin) => parseInt(bin));
};

export const padLeft = (value, length, arr) => {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  while (arrCopy.length < length) {
    arrCopy.unshift(value);
  }
  console.log(arrCopy);
  return arrCopy;
};

export const padRight = (value, length, arr) => {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  while (arrCopy.length < length) {
    arrCopy.push(value);
  }
  console.log(arrCopy);
  return arrCopy;
};
