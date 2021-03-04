import React from 'react';
import styled from 'styled-components';

const StyledBit = styled.div`
  float: left;
  height: 10px;
  width: 10px;
  background: ${({ value }) => {
    return value ? 'white' : 'black';
  }};
`;

export default function QrBit({ value }) {
  return <StyledBit value={value}>{value}</StyledBit>;
}
