import React from 'react';
import styled from 'styled-components';

import RightArrow from '@assets/icons/list/ic_arrow_right.svg';
import { Font13W400, Font13W700 } from '@assets/styles/fonts';

import { ResultItemContainer } from './ResultItemContainer';

export const ResultListItem = (props) => {
  /**
   * data: {
   *  beforeText: string,
   *  afterText: string
   * }
   */
  const { data } = props;

  return (
    <ResultItemContainer {...props}>
      <ResultListItemStyled>
        <span className="before">{data.beforeText}</span>
        <RightArrow width={13} height={16} />
        <span className="after">{data.afterText}</span>
      </ResultListItemStyled>
    </ResultItemContainer>
  );
};

const ResultListItemStyled = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  .before {
    ${Font13W400}
  }
  .after {
    ${Font13W700}
  }
`;
