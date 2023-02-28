import * as React from 'react';
import styled from 'styled-components';

import TextIcon from '@assets/icons/list/ic_text_inactive.svg';
import { Font13W500 } from '@assets/styles/fonts';

import { ResultDetailListItem } from '../common/ResultDetailListItem';

export const FrameItem = ({ data }) => {
  return (
    <FrameItemStyled>
      <FrameItemHeader>
        <span className="icon">
          <TextIcon width={18} height={18} />
        </span>
        <span className="title">
          <p>{data.title}</p>
        </span>
      </FrameItemHeader>
      <FrameItemContent>
        <ResultDetailListItem>{data.content}</ResultDetailListItem>
      </FrameItemContent>
    </FrameItemStyled>
  );
};

const FrameItemStyled = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0 0 16px;
  gap: 6px;
`;

const FrameItemHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  gap: 4px;

  .title {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    p {
      ${Font13W500}
      margin-right: 2px;
    }
  }
`;

const FrameItemContent = styled.div``;
