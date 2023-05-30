import * as React from 'react';
import styled from 'styled-components';

import { Font18W600 } from '@assets/styles/fonts';

export const Button = (props) => {
  const { children } = props;
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15.5px 12px;

  background: ${({ theme }) => theme.colors.gray90};
  &:disabled {
    background: ${({ theme }) => theme.colors.gray15};
  }

  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  ${Font18W600}
`;
