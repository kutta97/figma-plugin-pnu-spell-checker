import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '@store/hook';
import { selectedTextNodeValueSelector } from '@store/node';

import { Font14W400 } from '@assets/styles/fonts';

export const NodeSelectedHomeContents = () => {
  const selectedTextNodeValue = useAppSelector(selectedTextNodeValueSelector);
  return (
    <NodeSelectedHomeContentsStyled>
      <p>{selectedTextNodeValue}</p>
    </NodeSelectedHomeContentsStyled>
  );
};

const NodeSelectedHomeContentsStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 368px;
  padding: 16px;

  background: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.gray70};
  border-radius: 8px;

  ${Font14W400};
`;
