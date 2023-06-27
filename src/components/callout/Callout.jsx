import React from 'react';
import styled from 'styled-components';

import { Font12W500 } from '@assets/styles/fonts';

export const Callout = ({ children }) => {
  return <CalloutStyled>{children}</CalloutStyled>;
};

const CalloutStyled = styled.div`
  width: 100%;
  padding: 12px 16px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray3};

  p {
    ${Font12W500}
    color: ${({ theme }) => theme.colors.gray50};
    white-space: pre-line;
  }
`;
