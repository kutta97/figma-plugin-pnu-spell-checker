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
      checked: !!filtered.find((it) => it.id === FILTER.SPELL.id),
    },
    {
      ...FILTER.SPACE,
      checked: !!filtered.find((it) => it.id === FILTER.SPACE.id),
    },
  ]);

  const onFilterCheck = (id) => () => {
    const beforeFilterState = filterState.map((it) => {
      if (it.id === id) {
        return {
          ...it,
          checked: !it.checked,
        };
      }
      return it;
    });
    setFilterState(beforeFilterState);
  };

  const applyFilter = () => {
    dispatch(setFilter(filterState.filter((filter) => filter.checked)));
  };

  const filterCheckedState = useCallback(
    (id) => {
      return filterState.find((it) => it.id === id).checked;
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
