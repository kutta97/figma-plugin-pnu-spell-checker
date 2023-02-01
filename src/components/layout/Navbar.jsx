import * as React from 'react';
import styled from 'styled-components';
import Info from '@Assets/icons/ic_info.svg';
import Filter from '@Assets/icons/ic_filter.svg';
import { Font16W700 } from '@Assets/styles/fonts';

export function Navbar({ title }) {
  return (
    <NavbarStyled>
      <Info width={24} height={24} />
      <h2>{title}</h2>
      <Filter width={24} height={24} />
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
