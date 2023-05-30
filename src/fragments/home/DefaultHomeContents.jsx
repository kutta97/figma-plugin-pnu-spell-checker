import React from 'react';
import styled from 'styled-components';

import { Label } from '@components/text/label';

export const DefaultHomeContents = (props) => {
  return (
    <DefaultHomeContentsStyled {...props}>
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
`;
