import React from 'react';
import styled from 'styled-components';

import RightArrow from '@assets/icons/list/ic_arrow_right.svg';
import { Font14W400, Font14W700 } from '@assets/styles/fonts';

import { ResultItemContainer } from './ResultItemContainer';

export const ResultListItem = (props) => {
  /**
   * data: {
   *  beforeText: string,
   *  afterText: string,
   *  help: string,
   * }
   */
  const { result } = props;

  return (
    <ResultItemContainer help={result.help} {...props}>
      <ResultListItemStyled>
        <span className="before">{result.beforeText}</span>
        <RightArrow width={13} height={16} />
        <span className="after">{result.afterText}</span>
      </ResultListItemStyled>
    </ResultItemContainer>
  );
};

const ResultListItemStyled = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  .before {
    ${Font14W400}
  }
  .after {
    ${Font14W700}
  }
`;
