import { useMemo } from 'react';

import { PAGE_TYPE } from '@consts/index';

import { useAppDispatch, useAppSelector } from '@store/hook';
import { convertListenerConnect, resultCountSelector } from '@store/result';

import { usePageRouter } from '@hooks/usePageRouter';

export const useResultVM = () => {
  const dispatch = useAppDispatch();
  const { next, clear } = usePageRouter();

  const resultCount = useAppSelector(resultCountSelector);

  const isResultEmpty = useMemo(() => {
    return resultCount === 0;
  }, [resultCount]);

  const checkAll = () => {};

  const convert = () => {
    dispatch(convertListenerConnect());
  };

  const goDetail = () => {
    next(PAGE_TYPE.DETAIL);
  };

  const goHome = () => {
    clear();
  };

  return { isResultEmpty, checkAll, convert, goDetail, goHome };
};
