import { PAGE_TYPE } from '@consts/index';
import { useEffect } from 'react';

import { homeListenerConnector, homeNameSelector } from '@store/home';
import { useAppDispatch, useAppSelector } from '@store/hook';

import { usePageRouter } from '@hooks/usePageRouter';

export const useHomeVM = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(homeNameSelector);

  const { next } = usePageRouter();
  const search = () => {
    next(PAGE_TYPE.SEARCHING);
  };

  useEffect(() => {
    dispatch(homeListenerConnector());
  }, [dispatch]);

  return { name, search };
};
