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
    width: 50%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.gray90};
    animation: progress 1.5s infinite;
  }
  @keyframes progress {
    from {
      left: -50%;
    }
    to {
      left: 100%;
    }
  }
`;
