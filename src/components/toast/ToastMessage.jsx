import React from 'react';
import styled, { keyframes } from 'styled-components';

import WarningIcon from '@assets/icons/toast/ic_warning.svg';
import { Font15W400 } from '@assets/styles/fonts';

export const ToastMessage = (props) => {
  const { children } = props;
  return (
    <ToastMessageStyled {...props}>
      <span className="icon">
        <WarningIcon width="24px" height="24px" />
      </span>
      <span className="contents">
        <p>{children}</p>
      </span>
    </ToastMessageStyled>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ToastMessageStyled = styled.div`
  max-width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;

  background: rgba(69, 69, 72, 0.9);
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  position: fixed;
  z-index: 1000;
  top: 13.5%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
  animation: ${fadeIn} 0.3s forwards;

  .icon {
    margin-right: 8px;
  }

  .contents {
    p {
      font-family: 'Inter';
      ${Font15W400}
      padding: 0;
      white-space: nowrap;
    }
  }
`;
