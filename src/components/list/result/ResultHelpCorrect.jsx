import React from 'react';
import styled from 'styled-components';

import { Font14W400 } from '@assets/styles/fonts';

export const ResultHelpCorrect = (props) => {
  const { help } = props;
  return (
    <ResultHelpCorrectStyled>
      <p>{help}</p>
    </ResultHelpCorrectStyled>
  );
};

const ResultHelpCorrectStyled = styled.div`
  display: flex;
  align-items: center;
  width: 368px;
  padding: 10px 16px;
  margin: 0 16px;

  background: ${({ theme }) => theme.colors.gray3};
  color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;

  p {
    ${Font14W400}
    text-align: start;
    white-space: pre-line;
  }
`;
