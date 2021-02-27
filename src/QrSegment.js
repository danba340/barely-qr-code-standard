import styled from 'styled-components';

import { BITS_PER_CHAR } from './utils';

import QrBit from './QrBit';

const QrSegmentContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
`;

function QrSegment({ index, values }) {
  return (
    <div>
      <QrSegmentContainer>
        {values.map((value, tileIndex) => (
          <QrBit
            key={tileIndex}
            active={value}
            tileIndex={index * BITS_PER_CHAR * 5 + tileIndex}
          />
        ))}
      </QrSegmentContainer>
    </div>
  );
}

export default QrSegment;
