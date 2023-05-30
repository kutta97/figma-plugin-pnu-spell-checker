import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { ToastMessage } from '@components/toast/ToastMessage';

import { Font16W400 } from '@assets/styles/fonts';

import { DefaultHomeContents } from './DefaultHomeContents';
import { NodeSelectedHomeContents } from './NodeSelectedHomeContents';

export const HomeContents = (props) => {
  const { isCheckAvailable } = props;
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return undefined;
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const handelShowToast = () => {
    setMessage('1개의 텍스트 레이어를 선택해 주세요');
    setShowToast(true);
  };

  return (
    <HomeContentsStyled onClick={handelShowToast}>
      {isCheckAvailable ? (
        <NodeSelectedHomeContents className="selected" />
      ) : (
        <DefaultHomeContents className="default" />
      )}
      {showToast &&
        createPortal(
          <ToastMessage>{message}</ToastMessage>,
          document.getElementById('root')
        )}
    </HomeContentsStyled>
  );
};

const HomeContentsStyled = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: scroll;

  .selected {
    position: absolute;
    top: 39px;
  }

  .default {
    position: absolute;
    top: 242px;
  }

  p {
    ${Font16W400};
  }

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
