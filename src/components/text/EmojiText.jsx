import React from 'react';
import styled from 'styled-components';

import { Font18W700, Font40W500 } from '@assets/styles/fonts';

export const EmojiText = (props) => {
  const { emoji, children } = props;
  return (
    <EmojiTextStyled {...props}>
      <p className="emoji">{emoji}</p>
      {children}
    </EmojiTextStyled>
  );
};

const EmojiTextStyled = styled.div`
  .emoji {
    ${Font40W500}
  }
  p {
    ${Font18W700}
  }
`;
