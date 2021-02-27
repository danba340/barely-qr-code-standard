import { useState } from 'react';

import doge from './doge.png';

import QrSegment from './QrSegment';

import {
  padLeft,
  padRight,
  charToNum,
  numToBin,
  splitEvery,
  BITS_PER_ROW,
  BITS_PER_CHAR,
} from './utils';

function App() {
  const initialState = [
    ...new Array(Math.pow(BITS_PER_ROW, 2) - 25).fill(false),
  ];
  const [values, setValues] = useState(initialState);

  const handleTextInput = (e) => {
    const chars = padRight(
      e.target.value.split(''),
      '',
      (Math.pow(BITS_PER_ROW, 2) - 25) / BITS_PER_CHAR,
    );
    const nums = chars.map((char) => charToNum(char));
    const binStrings = nums.map((num) => numToBin(num));
    const binNumbers = binStrings.map((binString) =>
      binString.split('').map((bit) => parseInt(bit)),
    );
    const boolArrays = binNumbers.map((bits) => bits.map((bit) => !!bit));
    const padded = boolArrays.map((boolArray) =>
      padLeft(boolArray, false, BITS_PER_CHAR),
    );
    const flattened = [].concat.apply([], padded);
    const newState = padRight(flattened, false, Math.pow(BITS_PER_ROW, 2) - 25);
    setValues(newState);
  };

  return (
    <div id="app">
      <div id="qr">
        {splitEvery(BITS_PER_CHAR * 5, values).map((tile, index) => (
          <QrSegment key={index} index={index} values={tile} />
        ))}
        <img id="doge" src={doge} alt="doge" />
      </div>
      <input
        className="text-input"
        onChange={handleTextInput}
        type="text"
        maxLength={(Math.pow(BITS_PER_ROW, 2) - 25) / BITS_PER_CHAR}
      />
    </div>
  );
}

export default App;
