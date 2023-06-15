import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@store/hook';
import {
  convertListenerConnect,
  resultSelector,
  toggleAllResultSelection,
} from '@store/result';
import { selectedResultCountSelector } from '@store/result/selector';

import { usePageRouter } from '@hooks/usePageRouter';

export const useResultVM = () => {
  const dispatch = useAppDispatch();
  const { clear } = usePageRouter();

  const { resultList, resultWithMultipleRecommendList } =
    useAppSelector(resultSelector);
  const selectedResultCount = useAppSelector(selectedResultCountSelector);

  const resultCount = useMemo(() => {
    return resultList.length + resultWithMultipleRecommendList.length;
  }, [resultList, resultWithMultipleRecommendList]);

  const isResultEmpty = useMemo(() => {
    return resultCount === 0;
  }, [resultCount]);

  const isSelectedResultEmpty = useMemo(() => {
    return selectedResultCount === 0;
  }, [selectedResultCount]);

  const isAllResultSelected = useMemo(() => {
    return resultList.length === selectedResultCount;
  }, [resultList, selectedResultCount]);

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
