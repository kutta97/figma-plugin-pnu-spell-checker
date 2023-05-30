import React from 'react';
import styled from 'styled-components';

import { Label } from '@components/text/label';

import { Font16W400 } from '@assets/styles/fonts';

export const DefaultHomeContents = () => {
  return (
    <DefaultHomeContentsStyled>
      <p>작업 영역에서 검사하고자 하는 텍스트가 포함된</p>
      <span>
        <Label type="TEXT" />
        <p>선택해 주세요.</p>
      </span>
    </DefaultHomeContentsStyled>
  );
};

const DefaultHomeContentsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 16px 20px;

  p {
    ${Font16W400};
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
`;
