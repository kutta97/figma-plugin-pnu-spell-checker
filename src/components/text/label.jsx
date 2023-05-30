import React from 'react';
import styled from 'styled-components';

import FrameLayerIcon from '@assets/icons/label/ic_framelayer.svg';
import TextLayerIcon from '@assets/icons/label/ic_textlayer.svg';
import { Font15W700 } from '@assets/styles/fonts';

export const Label = (props) => {
  const { type } = props;

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

  const renderContents = () => {
    switch (type) {
      case 'FRAME':
        return <p>{`{Frame Layer}`}</p>;
      case 'TEXT':
        return <p>{`{Text Layer}`}</p>;
      default:
        return null;
    }
  };

  return (
    <LabelStyled {...props}>
      <span className="icon">{renderIcon()}</span>
      <span className="contents">{renderContents()}</span>
    </LabelStyled>
  );
};

const LabelStyled = styled.label`
  display: inline-flex;
  border-radius: 4px;
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.gray5};

  .icon {
    margin-right: 2px;
  }

  .contents {
    p {
      color: ${({ theme }) => theme.colors.violet};
      ${Font15W700};
    }
  }
`;
