import React from 'react';
import styled from 'styled-components';

import { PAGE_TYPE } from '@consts/index';

import { Button } from '@components/buttons/Button';

import { usePageRouter } from '@hooks/usePageRouter';

import { CompleteContents } from '@fragments/complete/Contents';

export const Complete = () => {
  const { next, clear } = usePageRouter();
  const handleHomeClick = () => {
    next(PAGE_TYPE.HOME, true);
    clear();
  };
  return (
    <CompleteStyled>
      <CompleteContents />
      <div className="button-container">
        <Button onClick={handleHomeClick}>처음으로</Button>
      </div>
    </CompleteStyled>
  );
};

const CompleteStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  .button-container {
    width: 100%;
    height: 76px;
    padding: 12px 16px;
  }
`;
