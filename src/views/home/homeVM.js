import { homeNameSelector, searchListenerConnect } from '@store/home';
import { useAppDispatch, useAppSelector } from '@store/hook';

export const useHomeVM = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(homeNameSelector);

  const search = () => {
    dispatch(searchListenerConnect());
  };

  return { name, search };
};
