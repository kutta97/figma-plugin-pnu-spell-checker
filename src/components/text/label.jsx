import React from 'react';
import styled from 'styled-components';

import FrameIcon from '@assets/icons/text/ic_frame.svg';
import TextIcon from '@assets/icons/text/ic_text.svg';

export const Label = (props) => {
  const { type, children } = props;

  const renderIcon = () => {
    switch (type) {
      case 'FRAME':
        return <FrameIcon width="18px" height="18px" />;
      case 'TEXT':
        return <TextIcon width="18px" height="18px" />;
      default:
        return null;
    }
  };

  return (
    <LabelStyled {...props}>
      <span className="icon">{renderIcon()}</span>
      <span className="contents">{children}</span>
    </LabelStyled>
  );
};

const LabelStyled = styled.label`
  display: inline-flex;
  border-radius: 4px;
  padding: 2px 6px;
  background: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.violet};
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  .icon {
    margin-right: 2px;
  }
`;
