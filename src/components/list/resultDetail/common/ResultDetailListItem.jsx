import * as React from 'react';
import styled from 'styled-components';

import { Font12W400 } from '@assets/styles/fonts';

export const ResultDetailListItem = ({ children }) => {
  return (
    <ListItemStyled>
      <div className="scroll-box">{children}</div>
    </ListItemStyled>
  );
};

const ListItemStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px;
  margin: 0 16px;

  background: ${({ theme }) => theme.colors.gray3};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.gray70};

  ${Font12W400}
  text-align: start;

  .scroll-box {
    max-height: 70px;
    overflow-y: auto;
  }
`;
