import React from 'react';
import styled from 'styled-components';

import { Callout } from '@components/callout/Callout';
import { EmojiText } from '@components/text/EmojiText';

import {
  Font12W500,
  Font13W400,
  Font15W400,
  Font18W700,
} from '@assets/styles/fonts';

export const InfoModal = () => {
  return (
    <InfoModalStyled>
      <InfoMainContents>
        <EmojiText emoji="🤖">
          <p className="title">디자이너, 개발자분들 반가워요</p>
          <p className="information">
            {`여러분들이 더 완벽하고 효율적인 작업을
              할 수 있도록 도와드리고 싶어요!
              피드백 많이 보내주세요.`}
          </p>
        </EmojiText>
        <Contact>
          <p className="contact">피드백 보내기</p>
          <p className="email">yhjin04170@gmail.com</p>
        </Contact>
      </InfoMainContents>
      <Callout>
        <p>
          {`💬 TMI : 저는 2명의 프로덕트 디자이너와
          2명의 프런트엔드 개발자에 의해 만들어졌어요`}
        </p>
      </Callout>
    </InfoModalStyled>
  );
};

const InfoModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 22px 16px;

  width: 100%;
  height: 100%;
`;

const InfoMainContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin: auto;
  gap: 28px;

  .title {
    color: ${({ theme }) => theme.colors.gray90};
    ${Font18W700}

    margin-top: 12px;
  }
  .information {
    color: ${({ theme }) => theme.colors.gray50};
    ${Font15W400}

    margin-top: 8px;
    white-space: pre-line;
  }
`;

const Contact = styled.div`
  .contact {
    ${Font12W500}
    color: ${({ theme }) => theme.colors.gray50};
  }
  .email {
    ${Font13W400}
    color: ${({ theme }) => theme.colors.keycolor};
    text-decoration: underline;
  }
`;
