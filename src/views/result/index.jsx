import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';
import { CheckboxText } from '@components/checkbox/CheckboxText';

import { Font14W600 } from '@assets/styles/fonts';

import { ResultContents } from '@fragments/result/Contents';

import { useResultVM } from '@views/result/resultVM';

export const Result = () => {
  const { converting, goDetail } = useResultVM();
  return (
    <ResultStyled>
      <ResultContents />
      <div className="button-container">
        <CheckboxText>
          <p>전체 선택</p>
        </CheckboxText>
        <Button onClick={converting}>텍스트 변환하기</Button>
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
    height: 77px;
    gap: 16px;
    padding: 12px 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray5};
    p {
      ${Font14W600}
      white-space: nowrap;
    }
  }
`;
