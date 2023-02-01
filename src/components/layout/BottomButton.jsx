import * as React from 'react';
import styled from 'styled-components';

import { Button } from '@Components/common/Button';

export function BottomButton() {
  return (
    <BottomButtonStyled>
      <Button text="검사하기" />
    </BottomButtonStyled>
  );
}

const BottomButtonStyled = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
`;
