import React from 'react';
import styled from 'styled-components';

export const ProgressBar = () => {
  return (
    <ProgressBarStyled>
      <div className="progress" />
    </ProgressBarStyled>
  );
};

const ProgressBarStyled = styled.div`
  width: 238px;
  height: 4px;
  position: relative;
  background: ${({ theme }) => theme.colors.gray5};
  overflow: hidden;

  .progress {
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.gray90};
    animation: progress 2s linear infinite;
  }
  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
