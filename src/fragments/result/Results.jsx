import React from 'react';
import styled from 'styled-components';

import { Font18W700 } from '@assets/styles/fonts';

import { ResultList } from '@fragments/result/ResultList';
import { ResultInfo } from '@fragments/result/ResultsInfo';

export const Results = (props) => {
  const { resultList } = props;

  const handleClickResultDetail = () => {};

  return (
    <ResultsStyled>
      <ResultInfo className="info">
        <p className="title">{`${resultList.length}건이 발견되었어요`}</p>
        <p>검사 결과 중 중복된 레이어들은 제거했어요</p>
        <button type="button" onClick={handleClickResultDetail}>
          검사 결과 상세
        </button>
      </ResultInfo>
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

  .info {
    .title {
      color: ${({ theme }) => theme.colors.gray90};
      ${Font18W700}
    }
  }
`;
