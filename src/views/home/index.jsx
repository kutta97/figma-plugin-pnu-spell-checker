import { Button } from '@pureComponents/buttons/Button';
import React from 'react';
import styled from 'styled-components';

import { useHomeVM } from '@views/home/homeVM';

export const Home = () => {
  const { name, search } = useHomeVM();
  return (
    <HomeStyled>
      Hy Home <div>{name}</div>
      <Button onClick={search}>검색하기</Button>
    </HomeStyled>
  );
};

const HomeStyled = styled.main``;
