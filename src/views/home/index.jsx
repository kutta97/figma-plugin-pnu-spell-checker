import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';

import { HomeContents } from '@fragments/home/Contents';
import { FilteredItem } from '@fragments/home/FilteredItem';

import { useHomeVM } from '@views/home/homeVM';

export const Home = () => {
  const { filtered, isCheckAvailable, check } = useHomeVM();
  return (
    <HomeStyled>
      <HomeContents isCheckAvailable={isCheckAvailable} />
      <div className="filtered-item-container">
        {filtered.length > 0 && <FilteredItem filteredItems={filtered} />}
      </div>
      <div className="button-container">
        <Button className="check" onClick={check} disabled={!isCheckAvailable}>
          검사하기
        </Button>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  .filtered-item-container {
    padding: 0 16px;
  }

  .button-container {
    width: 100%;
    height: 76px;
    padding: 12px 16px;
    .check {
      &:disabled {
        background: ${({ theme }) => theme.colors.gray15};
      }
    }
  }
`;
