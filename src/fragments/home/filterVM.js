import { useCallback, useState } from 'react';

import { FILTER } from '@consts/index';

import { setFilter } from '@store/home';
import { homeFilterSelector } from '@store/home/selector';
import { useAppDispatch, useAppSelector } from '@store/hook';

export const useFilterVM = () => {
  const filtered = useAppSelector(homeFilterSelector);
  const dispatch = useAppDispatch();

  const [filterState, setFilterState] = useState([
    {
      ...FILTER.SPELL,
      checked: !!filtered.find((filter) => filter.id === FILTER.SPELL.id),
    },
    {
      ...FILTER.SPACE,
      checked: !!filtered.find((filter) => filter.id === FILTER.SPACE.id),
    },
  ]);

  const onFilterCheck = (id) => () => {
    const afterFilterState = filterState.map((filter) =>
      filter.id === id ? { ...filter, checked: !filter.checked } : filter
    );
    setFilterState(afterFilterState);
  };

  const applyFilter = () => {
    dispatch(setFilter(filterState.filter((filter) => filter.checked)));
  };

  const filterCheckedState = useCallback(
    (id) => {
      return filterState.find((filter) => filter.id === id).checked;
    },
    [filterState]
  );

  return {
    filterState,
    filterCheckedState,
    onFilterCheck,
    applyFilter,
  };
};
