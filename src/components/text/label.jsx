import React from 'react';
import styled from 'styled-components';

import FrameLayerIcon from '@assets/icons/label/ic_framelayer.svg';
import TextLayerIcon from '@assets/icons/label/ic_textlayer.svg';
import { Font15W700 } from '@assets/styles/fonts';

const typeName = {
  FRAME: 'Frame',
  TEXT: 'Text',
};

export const Label = (props) => {
  const { type, children } = props;

  const renderIcon = () => {
    switch (type) {
      case 'FRAME':
        return <FrameLayerIcon width="18px" height="18px" />;
      case 'TEXT':
        return <TextLayerIcon width="18px" height="18px" />;
      default:
        return null;
    }
  };

  return (
    <LabelStyled {...props}>
      <span className="icon">{renderIcon()}</span>
      <span className="contents">
        <p>{children ?? `{${typeName[type]} Layer}`}</p>
      </span>
    </LabelStyled>
  );
};

const LabelStyled = styled.label`
  display: inline-flex;
  height: 30px;
  border-radius: 4px;
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.gray5};

  .icon {
    margin-right: 2px;
  }

  .contents {
    max-width: 272px;
    p {
      color: ${({ theme }) => theme.colors.violet};
      ${Font15W700};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
