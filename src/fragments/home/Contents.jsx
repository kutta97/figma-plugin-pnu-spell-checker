import React from 'react';
import styled from 'styled-components';

import { Font16W400 } from '@assets/styles/fonts';

import { Toast } from '@fragments/toast/Toast';

import { DefaultHomeContents } from './DefaultHomeContents';
import { NodeSelectedHomeContents } from './NodeSelectedHomeContents';

export const HomeContents = (props) => {
  const { isCheckAvailable } = props;

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
