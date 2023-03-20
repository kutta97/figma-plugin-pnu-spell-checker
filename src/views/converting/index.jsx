import React from 'react';
import styled from 'styled-components';

import { ConvertingContents } from '@fragments/converting/Contents';

export const Converting = () => {
  return (
    <ConvertingStyled>
      <ConvertingContents />
    </ConvertingStyled>
  );
};

const ConvertingStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
