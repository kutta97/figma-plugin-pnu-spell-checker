import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '@store/hook';
import { resultListSelector } from '@store/result';
import { resultWithMultipleRecommendListSelector } from '@store/result/selector';

import { ResultList } from '@fragments/result/ResultList';

import { ResultMultipleRecommendList } from './ResultMultipleRecommendList';

export const Results = () => {
  const resultList = useAppSelector(resultListSelector);
  const resultWithMultipleRecommendList = useAppSelector(
    resultWithMultipleRecommendListSelector
  );

  return (
    <ResultsStyled>
      <ResultList resultList={resultList} />
      {resultWithMultipleRecommendList.length && (
        <ResultMultipleRecommendList
          resultWithMultipleRecommendList={resultWithMultipleRecommendList}
        />
      )}
    </ResultsStyled>
  );
};

const ResultsStyled = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  max-height: 548px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
