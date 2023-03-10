import { useMemo } from 'react';

import { searchListenerConnect } from '@store/home';
import { homeFilterSelector } from '@store/home/selector';
import { useAppDispatch, useAppSelector } from '@store/hook';

export const useHomeVM = () => {
  const dispatch = useAppDispatch();
  const filtered = useAppSelector(homeFilterSelector);

  // TODO 선택한 frame 없을 경우 disabled 하게 변경
  const searchDisabled = useMemo(() => {
    return true;
  }, []);

  const search = () => {
    dispatch(searchListenerConnect());
  };

  return { filtered, search, searchDisabled };
};
