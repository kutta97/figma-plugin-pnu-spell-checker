import React from 'react';
import styled from 'styled-components';

import { Label } from '@components/text/label';

export const HomeContents = () => {
  return (
    <HomeContentsStyled>
      <p>
        <span>작업 영역에서 검사하고자 하는 텍스트가 포함된</span>
      </p>
      <p>
        <Label className="label" type="TEXT">
          Text Layer
        </Label>
        <span>혹은</span>
        <Label className="label" type="FRAME">
          Frame
        </Label>
        <span>을</span>
      </p>
      <p>선택해 주세요.</p>
    </HomeContentsStyled>
  );
};

const HomeContentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
