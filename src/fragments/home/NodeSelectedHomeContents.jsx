import React from 'react';
import styled from 'styled-components';

import { NodeLabel } from '@components/label/NodeLabel';

import { useAppSelector } from '@store/hook';
import { selectedNodeSelector } from '@store/node';

export const NodeSelectedHomeContents = (props) => {
  const selectedTextNode = useAppSelector(selectedNodeSelector);
  return (
    <NodeSelectedHomeContentsStyled {...props}>
      <span>
        <NodeLabel type="TEXT">{selectedTextNode?.name}</NodeLabel>
        <p>선택됨</p>
      </span>
      <div className="selected-text-node-contents">
        <p>{selectedTextNode?.value ?? ''}</p>
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
      padding: 0;
    }
  }
`;
