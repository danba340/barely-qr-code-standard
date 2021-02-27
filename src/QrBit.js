import React from 'react';
import styled from 'styled-components';

const Bit = styled.div`
  height: 10px;
  width: 10px;
  background: ${({ active }) => (active ? 'white' : 'black')};
`;

function QrBit({ active, tileIndex }) {
  return <Bit active={active}></Bit>;
}

export default QrBit;
