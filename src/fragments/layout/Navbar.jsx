import * as React from 'react';
import styled from 'styled-components';

import Back from '@assets/icons/navbar/ic_back.svg';
import Info from '@assets/icons/navbar/ic_info.svg';
import { Font18W700 } from '@assets/styles/fonts';

import { useNavbarVM } from './navbarVM';

export function Navbar() {
  const { pageTitle, isVisibleBackButton, isVisibleLeftButton, prev } =
    useNavbarVM();

  return (
    <NavbarStyled>
      {isVisibleLeftButton && (
        <div className="left-icon">
          {isVisibleBackButton ? (
            <Back width={24} height={24} onClick={prev} />
          ) : (
            <Info width={24} height={24} />
          )}
        </div>
      )}
      <h2>{pageTitle}</h2>
      <div className="divider" />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 15.5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  h2 {
    ${Font18W700}
  }

  .left-icon {
    position: absolute;
    top: 14px;
    left: 16px;
  }
`;
