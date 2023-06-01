import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '@store/hook';
import { resultListSelector } from '@store/result';

import { ResultList } from '@fragments/result/ResultList';

export const Results = () => {
  const resultList = useAppSelector(resultListSelector);

  return (
    <ResultsStyled>
      <ResultList resultList={resultList} />
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
`;
