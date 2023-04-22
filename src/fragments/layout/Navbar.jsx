import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Back from '@assets/icons/navbar/ic_back.svg';
import Filter from '@assets/icons/navbar/ic_filter.svg';
import Info from '@assets/icons/navbar/ic_info.svg';
import { Font16W700 } from '@assets/styles/fonts';

import { FilterOverlay } from '@fragments/home/FilterOverlay';

import { useNavbarVM } from './navbarVM';

export function Navbar() {
  const {
    pageTitle,
    isVisibleBackButton,
    isVisibleLeftButton,
    isVisibleRightButton,
    prev,
  } = useNavbarVM();

  const filterRef = useRef();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterPosition, setPosition] = useState({ y: 0 });

  useEffect(() => {
    if (filterRef) {
      const y = filterRef.current.offsetTop + 26;
      setPosition({
        y,
      });
    }
  }, [filterRef]);

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
      {isFilterOpen && <FilterOverlay y={filterPosition.y} />}
      <div className="right-icon" ref={filterRef}>
        {isVisibleRightButton && (
          <Filter
            width={24}
            height={24}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />
        )}
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
