import * as React from 'react';
import styled from 'styled-components';

import { Font16W700 } from '@assets/styles/fonts';

export function Button({ onClick, children }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 12px;

  background: ${({ theme }) => theme.colors.gray90};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;

  ${Font16W700}
`;
