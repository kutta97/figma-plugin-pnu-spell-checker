import React from 'react';
import styled from 'styled-components';

import { Font15W700 } from '@assets/styles/fonts';

export const ResultMultipleRecommendListContainer = (props) => {
  const { children } = props;

  return (
    <ResultMultipleRecommendListContainerStyled>
      <Divider />
      <RecommendInfo>
        <p>아래 단어들은 다음과 같이 바꾸면 좋아요</p>
      </RecommendInfo>
      {children}
    </ResultMultipleRecommendListContainerStyled>
  );
};

const ResultMultipleRecommendListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.gray3};

  margin-top: 20px;
`;

const RecommendInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  padding: 12px;

  background: rgba(123, 103, 251, 0.05);

  p {
    ${Font15W700}
    color: ${({ theme }) => theme.colors.violet};
  }
`;
