import React from 'react';
import styled from 'styled-components';

import { CheckingContents } from '@fragments/checking/Contents';

export const Checking = () => {
  return (
    <CheckingStyled>
      <CheckingContents />
    </CheckingStyled>
  );
};

const CheckingStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
