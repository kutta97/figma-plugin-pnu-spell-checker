import React from 'react';
import styled from 'styled-components';

import { ProgressBar } from '@components/progress/ProgressBar';

import { Font18W700, Font40W500 } from '@assets/styles/fonts';

export const CheckingContents = () => {
  return (
    <CheckingContentsStyled>
      <div className="text-container">
        <p className="icon">👀</p>
        <p>고칠 곳이 있는지 열심히 찾고 있어요.</p>
      </div>
      <ProgressBar />
    </CheckingContentsStyled>
  );
};

const CheckingContentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .text-container {
    gap: 12px;
    .icon {
      ${Font40W500}
    }
    p {
      ${Font18W700}
    }
  }
`;
