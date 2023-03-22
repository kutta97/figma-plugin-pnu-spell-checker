import { PAGE_TYPE } from '@consts/index';

import { useAppDispatch, useAppSelector } from '@store/hook';
import { convertListenerConnect, resultListSelector } from '@store/result';

import { usePageRouter } from '@hooks/usePageRouter';

export const useResultVM = () => {
  const dispatch = useAppDispatch();
  const { next, clear } = usePageRouter();

  const resultList = useAppSelector(resultListSelector);

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

  return { resultList, checkAll, convert, goDetail, goHome };
};
