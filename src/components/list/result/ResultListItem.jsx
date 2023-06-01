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
        <p className="before">{result.beforeText}</p>
        <RightArrow width={13} height={17} />
        <p className="after">{result.afterText}</p>
      </ResultListItemStyled>
    </ResultItemContainer>
  );
};

const ResultListItemStyled = styled.div`
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
