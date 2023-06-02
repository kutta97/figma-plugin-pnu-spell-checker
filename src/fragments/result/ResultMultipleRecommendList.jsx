import React from 'react';
import styled from 'styled-components';

import { ResultMultipleRecommendListItem } from '@components/list/result/ResultMultipleRecommendListItem';

import { ResultMultipleRecommendListContainer } from './ResultMultipleRecommendListContainer';

export const ResultMultipleRecommendList = (props) => {
  const { resultWithMultipleRecommendList } = props;

  return (
    <ResultMultipleRecommendListContainer>
      <ResultMultipleRecommendListStyled>
        {resultWithMultipleRecommendList.map((item) => (
          <ResultMultipleRecommendListItem key={item.id} result={item.data} />
        ))}
      </ResultMultipleRecommendListStyled>
    </ResultMultipleRecommendListContainer>
  );
};

const ResultMultipleRecommendListStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
