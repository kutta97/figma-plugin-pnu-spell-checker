import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';
import { CheckboxText } from '@components/checkbox/CheckboxText';

import { Font14W600 } from '@assets/styles/fonts';

import { ResultContents } from '@fragments/result/Contents';
import { ResultEmpty } from '@fragments/result/Empty';

import { useResultVM } from '@views/result/resultVM';

export const Result = () => {
  const { resultList, checkAll, convert, goDetail, goHome } = useResultVM();
  return (
    <ResultStyled>
      {resultList.length ? (
        <ResultContents resultList={resultList} />
      ) : (
        <ResultEmpty />
      )}
      <div className="button-container">
        {resultList.length ? (
          <>
            <CheckboxText onCheck={checkAll}>
              <p>전체 선택</p>
            </CheckboxText>
            <Button className="button" onClick={convert}>
              텍스트 변환하기
            </Button>
          </>
        ) : (
          <Button className="button" onClick={goHome}>
            처음으로
          </Button>
        )}
      </div>
    </ResultStyled>
  );
};

const ResultStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .button-container {
    display: flex;
    width: 100%;
    gap: 16px;
    padding: 12px 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray5};
    p {
      ${Font14W600}
      white-space: nowrap;
    }
    .button {
      height: 52px;
    }
  }
`;
