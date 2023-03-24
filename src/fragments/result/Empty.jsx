import React from 'react';
import styled from 'styled-components';

import { EmojiText } from '@components/text/EmojiText';

import { Font15W500 } from '@assets/styles/fonts';

export const EmptyResult = () => {
  return (
    <EmptyResultStyled>
      <EmojiText emoji="👍">
        <p>고칠 곳이 없어요</p>
        <p className="sub-text">
          그래도 완벽한 작업을 위해 한 번 더 검토해 주세요 :)
        </p>
      </EmojiText>
    </EmptyResultStyled>
  );
};

const EmptyResultStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .sub-text {
    color: ${({ theme }) => theme.colors.gray50};
    ${Font15W500}
    margin-top: 4px;
  }
`;
