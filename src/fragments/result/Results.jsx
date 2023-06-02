import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '@store/hook';
import { resultSelector } from '@store/result';

import { ResultList } from '@fragments/result/ResultList';

import { ResultMultipleRecommendList } from './ResultMultipleRecommendList';

export const Results = () => {
  const { resultList, resultWithMultipleRecommendList } =
    useAppSelector(resultSelector);

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
