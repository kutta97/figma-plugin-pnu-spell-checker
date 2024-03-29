import React, { useEffect } from 'react';
import styled from 'styled-components';

import { ConvertingContents } from '@fragments/converting/Contents';

import { useConvertingVM } from './convertingVM';

export const Converting = () => {
  const { processConversionResult } = useConvertingVM();

  useEffect(() => {
    window.addEventListener('message', processConversionResult);
    return () => {
      window.removeEventListener('message', processConversionResult);
    };
  });

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
