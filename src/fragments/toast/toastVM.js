import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@store/hook';
import {
  hideToast,
  toastMessageSelector,
  toastVisibleSelector,
} from '@store/toast';

export const useToastVM = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(toastVisibleSelector);
  const message = useAppSelector(toastMessageSelector);

  useEffect(() => {
    if (!isVisible) return undefined;
    const timer = setTimeout(() => {
      dispatch(hideToast());
    }, 4000);
    return () => clearTimeout(timer);
  }, [dispatch, isVisible]);

  return {
    isVisible,
    message,
  };
};
