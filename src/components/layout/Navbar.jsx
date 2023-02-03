import * as React from 'react';
import styled from 'styled-components';

import Back from '@assets/icons/ic_back.svg';
import Filter from '@assets/icons/ic_filter.svg';
import Info from '@assets/icons/ic_info.svg';
import { Font16W700 } from '@assets/styles/fonts';

export function Navbar({ pageTitle, isVisibleBackButton }) {
  return (
    <NavbarStyled>
      {isVisibleBackButton ? (
        <Back width={24} height={24} />
      ) : (
        <Info width={24} height={24} />
      )}
      <h2>{pageTitle}</h2>
      {!isVisibleBackButton && <Filter width={24} height={24} />}
    </NavbarStyled>
  );
}

const NavbarStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  h2 {
    ${Font16W700}
  }
`;
