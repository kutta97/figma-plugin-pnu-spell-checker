import React from 'react';
import styled from 'styled-components';

import { Label } from '@components/text/label';

import { useAppSelector } from '@store/hook';
import { selectedNodeCountsSelector } from '@store/node';

const DefaultHomeContents = () => {
  return (
    <HomeContentsStyled>
      <p>작업 영역에서 검사하고자 하는 텍스트가 포함된</p>
      <p>
        <Label type="TEXT">Text Layer</Label>
        <span>혹은</span>
        <Label type="FRAME">Frame</Label>
        <span>을</span>
      </p>
      <p>선택해 주세요.</p>
    </HomeContentsStyled>
  );
};

const NodeSelectedHomeContents = () => {
  const selectedNodeCounts = useAppSelector(selectedNodeCountsSelector);
  return (
    <HomeContentsStyled>
      <p className="selected">
        <Label type="TEXT">Text Layer</Label>
        <span>{`${selectedNodeCounts.text}개 선택됨`}</span>
      </p>
      <p className="selected">
        <Label type="FRAME">Frame</Label>
        <span>{`${selectedNodeCounts.frame}개 선택됨`}</span>
      </p>
    </HomeContentsStyled>
  );
};

export const HomeContents = (props) => {
  const { isCheckAvailable } = props;

  return isCheckAvailable ? (
    <NodeSelectedHomeContents />
  ) : (
    <DefaultHomeContents />
  );
};

const HomeContentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .selected {
    gap: 8px;
  }
`;
