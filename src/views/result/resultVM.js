import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@store/hook';
import {
  convertListenerConnect,
  resultCountSelector,
  toggleAllResultSelection,
} from '@store/result';
import { selectedResultCountSelector } from '@store/result/selector';

import { usePageRouter } from '@hooks/usePageRouter';

export const useResultVM = () => {
  const dispatch = useAppDispatch();
  const { clear } = usePageRouter();

  const resultCount = useAppSelector(resultCountSelector);
  const selectedResultCount = useAppSelector(selectedResultCountSelector);

  const isResultEmpty = useMemo(() => {
    return resultCount === 0;
  }, [resultCount]);

  const isSelectedResultEmpty = useMemo(() => {
    return selectedResultCount === 0;
  }, [selectedResultCount]);

  const isAllResultSelected = useMemo(() => {
    return resultCount === selectedResultCount;
  }, [resultCount, selectedResultCount]);

  const toggleCheckAll = (isChecked) => {
    dispatch(toggleAllResultSelection(isChecked));
  };

  const convert = () => {
    dispatch(convertListenerConnect());
  };

  const goHome = () => {
    clear();
  };

  return {
    isResultEmpty,
    isSelectedResultEmpty,
    isAllResultSelected,
    toggleCheckAll,
    convert,
    goHome,
  };
};
