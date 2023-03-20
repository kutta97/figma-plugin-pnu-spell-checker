import React from 'react';
import styled from 'styled-components';

import { ProgressBar } from '@components/progress/ProgressBar';
import { EmojiText } from '@components/text/EmojiText';

export const EmojiProgressBarText = (props) => {
  const { emoji, children } = props;
  return (
    <EmojiProgressBarTextStyled {...props}>
      <EmojiText emoji={emoji}>{children}</EmojiText>
      <ProgressBar />
    </EmojiProgressBarTextStyled>
  );
};

const EmojiProgressBarTextStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
