import React from 'react';
import styled from 'styled-components';

import RightArrow from '@assets/icons/list/ic_arrow_right.svg';
import { Font14W400, Font14W700 } from '@assets/styles/fonts';

export const ResultChangeText = (props) => {
  const { result } = props;
  return (
    <ResultChangeTextStyled>
      <p className="before">{result.beforeText}</p>
      <span>
        <RightArrow className="right-arrow" width={13} height={17} />
      </span>
      <p className="after">{result.afterText}</p>
    </ResultChangeTextStyled>
  );
};

const ResultChangeTextStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;

  .before {
    ${Font14W400}
    text-align: start;
    word-break: break-all;
  }

  .after {
    ${Font14W700}
    text-align: start;
    word-break: break-all;
  }
`;
