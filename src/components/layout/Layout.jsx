import * as React from 'react';
import styled from 'styled-components';

import { Navbar } from './Navbar';

export function Layout({ children }) {
  return (
    <LayoutStyled>
      <Navbar />
      <ContentStyled>{children}</ContentStyled>
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
