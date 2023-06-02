import React from 'react';
import styled from 'styled-components';

import { ResultChangeText } from './ResultChangeText';
import { ResultHelpCorrect } from './ResultHelpCorrect';

export const ResultMultipleRecommendListItem = (props) => {
  const { result } = props;

  return (
    <ResultMultipleRecommendListItemStyled {...props}>
      <div className="change-text-continer">
        <ResultChangeText result={result} />
      </div>
      <ResultHelpCorrect help={result.help} />
    </ResultMultipleRecommendListItemStyled>
  );
};

const ResultMultipleRecommendListItemStyled = styled.section`
  display: flex;
  flex-direction: column;

  .change-text-continer {
    padding: 10px 16px;
  }
`;
