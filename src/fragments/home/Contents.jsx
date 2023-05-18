import React from 'react';
import styled from 'styled-components';

import { Label } from '@components/text/label';

import { useAppSelector } from '@store/hook';
import { selectedTextNodeValueSelector } from '@store/node';

import { Font13W400 } from '@assets/styles/fonts';

const DefaultHomeContents = () => {
  return (
    <DefaultHomeContentsStyled>
      <p>작업 영역에서 검사하고자 하는 텍스트가 포함된</p>
      <p>
        <Label type="TEXT">Text Layer</Label>
        <span>를</span>선택해 주세요.
      </p>
    </DefaultHomeContentsStyled>
  );
};

const NodeSelectedHomeContents = () => {
  const selectedTextNodeValue = useAppSelector(selectedTextNodeValueSelector);
  return (
    <HomeSelectedTextNodeStyled>
      <p>{selectedTextNodeValue}</p>
    </HomeSelectedTextNodeStyled>
  );
};

export const HomeContents = (props) => {
  const { isCheckAvailable } = props;

  return (
    <HomeContentsStyled>
      <DefaultHomeContents />
      {isCheckAvailable && <NodeSelectedHomeContents />}
    </HomeContentsStyled>
  );
};

const HomeContentsStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const DefaultHomeContentsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  padding: 16px 20px;

  p {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const HomeSelectedTextNodeStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 368px;
  padding: 16px;

  background: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.gray70};
  border-radius: 8px;

  ${Font13W400};
`;
