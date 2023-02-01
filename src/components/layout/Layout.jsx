import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { BottomButton } from './BottomButton';

export function Layout({ children }) {
  return (
    <LayoutStyled>
      <Navbar title="맞춤법 검사하기" />
      <ContentStyled>{children}</ContentStyled>
      <BottomButton />
    </LayoutStyled>
  );
}

const LayoutStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentStyled = styled.div`
  width: 100%;
  height: 100%;
`;
