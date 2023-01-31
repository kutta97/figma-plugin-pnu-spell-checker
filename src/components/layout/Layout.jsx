import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';

export function Layout({ children }) {
  return (
    <LayoutStyled>
      <Navbar name="맞춤법 검사하기" />
      {children}
    </LayoutStyled>
  );
}

const LayoutStyled = styled.main``;
