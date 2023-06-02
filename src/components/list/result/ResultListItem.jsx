import React from 'react';
import styled from 'styled-components';

import { CheckboxText } from '@components/checkbox/CheckboxText';

import { ResultChangeText } from './ResultChangeText';
import { ResultHelpCorrect } from './ResultHelpCorrect';

export const ResultListItem = (props) => {
  const { result, onCheck, checked, className } = props;

  const handleCheck = () => onCheck?.();

  return (
    <ResultListItemStyled className={className}>
      <CheckboxText
        className="checkbox-text"
        onCheck={handleCheck}
        checked={checked}
      >
        <ResultChangeText result={result} />
      </CheckboxText>
      <ResultHelpCorrect help={result.help} />
    </ResultListItemStyled>
  );
};

const ResultListItemStyled = styled.section`
  display: flex;
  flex-direction: column;

  .checkbox-text {
    padding: 10px 16px;
  }
`;
