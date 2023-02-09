import * as React from 'react';
import styled from 'styled-components';

import Back from '@assets/icons/ic_back.svg';
import Filter from '@assets/icons/ic_filter.svg';
import Info from '@assets/icons/ic_info.svg';
import { Font16W700 } from '@assets/styles/fonts';

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
      <div className="right-icon">
        {!isVisibleBackButton && <Filter width={24} height={24} />}
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16.5px 0 16.5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  h2 {
    ${Font16W700}
  }

  .left-icon {
    position: absolute;
    top: 14px;
    left: 16px;
  }

  .right-icon {
    position: absolute;
    top: 14px;
    right: 16px;
  }
`;
