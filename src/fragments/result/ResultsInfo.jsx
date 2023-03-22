import React from 'react';
import styled from 'styled-components';

import { Font14W500, Font15W500 } from '@assets/styles/fonts';

export const ResultInfo = (props) => {
  const { children } = props;
  return <ResultInfoStyled {...props}>{children}</ResultInfoStyled>;
};

const ResultInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 4px;

  p {
    color: ${({ theme }) => theme.colors.gray50};
    ${Font15W500}
  }
  button {
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.gray50};
    ${Font14W500}
    text-decoration: underline;
  }
`;
