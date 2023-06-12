import React from 'react';
import styled from 'styled-components';

import { EmojiText } from '@components/text/EmojiText';

import { Font15W500, Font18W700 } from '@assets/styles/fonts';

export const CompleteContents = () => {
  return (
    <CompleteContentsStyled>
      <EmojiText className="emoji-text" emoji="🙌">
        <TextContainer>
          <p className="title">선택된 텍스트가 모두 변환되었어요.</p>
          <p className="subtitle ">도움이 필요하면 또 찾아주세요!</p>
        </TextContainer>
      </EmojiText>
    </CompleteContentsStyled>
  );
};

const CompleteContentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .emoji-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    ${Font18W700}
    color: ${({ theme }) => theme.colors.gray90};
  }
  .subtitle {
    ${Font15W500}
    color: ${({ theme }) => theme.colors.gray50};
  }
`;
