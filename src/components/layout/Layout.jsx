import * as React from 'react';
import styled from 'styled-components';

import { useNavbarHook } from '@components/layout/layout.hook';

import { BottomButton } from './BottomButton';
import { Navbar } from './Navbar';

export function Layout({ children }) {
  const { pageTitle, isVisibleBackButton, bottomPageType } = useNavbarHook();

  return (
    <LayoutStyled>
      <Navbar pageTitle={pageTitle} isVisibleBackButton={isVisibleBackButton} />
      <ContentStyled>{children}</ContentStyled>
      <BottomButton pageType={bottomPageType} />
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
