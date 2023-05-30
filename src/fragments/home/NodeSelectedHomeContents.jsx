import React from 'react';
import styled from 'styled-components';

import { Label } from '@components/text/label';

import { useAppSelector } from '@store/hook';
import { selectedTextNodeValueSelector } from '@store/node';

export const NodeSelectedHomeContents = (props) => {
  const selectedTextNodeValue = useAppSelector(selectedTextNodeValueSelector);
  return (
    <NodeSelectedHomeContentsStyled {...props}>
      <span>
        <Label type="TEXT" />
        <p>선택됨</p>
      </span>
      <div className="selected-text-node-contents">
        <p>{selectedTextNodeValue}</p>
      </div>
    </NodeSelectedHomeContentsStyled>
  );
};

const NodeSelectedHomeContentsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0 16px;

  .selected-text-node-contents {
    display: flex;
    align-items: center;
    width: 368px;
    padding: 16px;

    background: ${({ theme }) => theme.colors.gray5};
    color: ${({ theme }) => theme.colors.gray70};
    border-radius: 8px;

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      text-align: left;
    }
  }
`;
