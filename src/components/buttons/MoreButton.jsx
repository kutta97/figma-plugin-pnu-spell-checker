import React from 'react';
import styled from 'styled-components';

import RightArrowLine from '@assets/icons/list/ic_arrow_right_line_r.svg';
import { Font13W600 } from '@assets/styles/fonts';

export const MoreButton = (props) => {
  const { children } = props;
  return (
    <MoreButtonStyled type="button" {...props}>
      {children}
      <RightArrowLine width={14} height={14} />
    </MoreButtonStyled>
  );
};

const MoreButtonStyled = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray30};
  ${Font13W600}
`;
