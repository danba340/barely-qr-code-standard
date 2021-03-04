import { useState } from 'react';
import doge from './doge.png';

import QrChar from './QrChar';

import {
  charToNumber,
  numberToBin,
  padLeft,
  padRight,
  splitEvery,
} from './utils';
const BITS_PER_ROW = 15;
const BITS_PER_CHAR = 5;

function App() {
  const [bits, setBits] = useState([
    ...new Array(Math.pow(BITS_PER_ROW, 2) - 25).fill(false),
  ]);

  const handleTextChange = (e) => {
    const chars = e.target.value.split('');
    console.log(chars);
    const numbers = chars.map((c) => charToNumber(c));
    console.log(numbers);
    const binNumberArrays = numbers.map((n) => numberToBin(n));
    console.log(binNumberArrays);
    const bools = binNumberArrays.map((binNumbers) => {
      return binNumbers.map((binNumber) => !!binNumber);
    });
    console.log(bools);
    const paddedBools = bools.map((b) => padLeft(false, 5, b));
    const flattened = [].concat.apply([], paddedBools);
    const newState = padRight(false, Math.pow(BITS_PER_ROW, 2) - 25, flattened);
    setBits(newState);
  };

  return (
    <div id="app">
      <div id="qr">
        <img id="doge" src={doge} alt="doge" />
        {splitEvery(BITS_PER_CHAR, bits).map((bits, index) => {
          return (
            <QrChar key={index} charIndex={index * BITS_PER_CHAR} bits={bits} />
          );
        })}
      </div>
      <input
        onChange={handleTextChange}
        maxLength={(Math.pow(BITS_PER_ROW, 2) - 25) / BITS_PER_CHAR}
        className="text-input"
        type="text"
      />
    </div>
  );
}

export default App;
