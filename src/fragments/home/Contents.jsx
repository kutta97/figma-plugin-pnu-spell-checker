import React from 'react';
import styled from 'styled-components';

import { DefaultHomeContents } from './DefaultHomeContents';
import { NodeSelectedHomeContents } from './NodeSelectedHomeContents';

export const HomeContents = (props) => {
  const { isCheckAvailable } = props;

  return (
    <HomeContentsStyled>
      {isCheckAvailable ? (
        <NodeSelectedHomeContents />
      ) : (
        <DefaultHomeContents className="default" />
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

  .default {
    position: absolute;
    top: 242px;
  }
`;
