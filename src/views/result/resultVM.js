import { PAGE_TYPE } from '@consts/index';

import { useAppDispatch } from '@store/hook';
import { convertListenerConnect } from '@store/result';

import { usePageRouter } from '@hooks/usePageRouter';

export const useResultVM = () => {
  const dispatch = useAppDispatch();
  const { next } = usePageRouter();

  const converting = () => {
    dispatch(convertListenerConnect());
  };

  const goDetail = () => {
    next(PAGE_TYPE.DETAIL);
  };

  return { converting, goDetail };
};
