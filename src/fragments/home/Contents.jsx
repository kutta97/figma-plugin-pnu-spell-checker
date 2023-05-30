import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '@store/hook';
import { hideToast, showToast } from '@store/toast';

import { Font16W400 } from '@assets/styles/fonts';

import { Toast } from '@fragments/toast/Toast';

import { DefaultHomeContents } from './DefaultHomeContents';
import { NodeSelectedHomeContents } from './NodeSelectedHomeContents';

export const HomeContents = (props) => {
  const dispatch = useAppDispatch();
  const { isCheckAvailable } = props;

  useEffect(() => {
    if (isCheckAvailable) {
      dispatch(hideToast());
    } else {
      dispatch(showToast('1개의 텍스트 레이어를 선택해 주세요'));
    }
  }, [dispatch, isCheckAvailable]);

  return (
    <HomeContentsStyled>
      {isCheckAvailable ? (
        <NodeSelectedHomeContents className="selected" />
      ) : (
        <DefaultHomeContents className="default" />
      )}
      <Toast />
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
