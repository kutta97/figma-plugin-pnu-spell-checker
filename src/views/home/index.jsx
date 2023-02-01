import { useAppDispatch, useAppSelector } from '@Store/hook';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { homeNameSelector, homeListenerConnector } from './vm';

export const Home = () => {
  const dispatch = useAppDispatch();
  const home = useAppSelector(homeNameSelector);

  useEffect(() => {
    dispatch(homeListenerConnector());
  }, [dispatch]);

  return (
    <HomeStyled>
      Hy Home <div>{home}</div>
    </HomeStyled>
  );
};

const HomeStyled = styled.main``;
