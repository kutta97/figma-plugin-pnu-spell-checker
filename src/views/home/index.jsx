import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/buttons/Button';

import { HomeContents } from '@fragments/home/Contents';
import { FilteredItem } from '@fragments/home/FilteredItem';

import { useHomeVM } from '@views/home/homeVM';

export const Home = () => {
  const { filtered, search, searchDisabled } = useHomeVM();
  return (
    <HomeStyled>
      <HomeContents />
      {filtered.length > 0 && <FilteredItem filteredItems={filtered} />}
      <Button className="search" onClick={search} disabled={searchDisabled}>
        검사하기
      </Button>
    </HomeStyled>
  );
};

const HomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px 16px;

  .search {
    &:disabled {
      background: ${({ theme }) => theme.colors.gray15};
    }
  }
`;
