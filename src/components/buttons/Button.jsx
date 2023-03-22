import * as React from 'react';
import styled from 'styled-components';

import { Font15W600 } from '@assets/styles/fonts';

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 12px;

  background: ${({ theme }) => theme.colors.gray90};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;

  ${Font15W600}
`;
