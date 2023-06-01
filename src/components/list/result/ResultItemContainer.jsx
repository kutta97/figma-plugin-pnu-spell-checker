import React from 'react';
import styled from 'styled-components';

import { CheckboxText } from '@components/checkbox/CheckboxText';

import { Font14W400 } from '@assets/styles/fonts';

export const ResultItemContainer = (props) => {
  const { onCheck, checked, help, children } = props;

  const handleCheck = () => onCheck?.();

  return (
    <ResultListItemContainerStyled>
      <CheckboxText
        className="checkbox-text"
        onCheck={handleCheck}
        checked={checked}
      >
        {children}
      </CheckboxText>
      <HelpCorrectContents>
        <p>{help}</p>
      </HelpCorrectContents>
    </ResultListItemContainerStyled>
  );
};

const ResultListItemContainerStyled = styled.section`
  display: flex;
  flex-direction: column;

  .checkbox-text {
    padding: 10px 16px;
  }
`;

const HelpCorrectContents = styled.div`
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
  }
`;
