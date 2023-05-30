import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';

import { HomeContents } from '@fragments/home/Contents';

import { useHomeVM } from '@views/home/homeVM';

export const Home = () => {
  const { isCheckAvailable, check } = useHomeVM();
  return (
    <HomeStyled>
      <HomeContents isCheckAvailable={isCheckAvailable} />
      <div className="button-container">
        <Button onClick={check} disabled={!isCheckAvailable}>
          검사하기
        </Button>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.main`
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
