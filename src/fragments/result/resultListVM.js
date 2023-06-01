import { useDispatch } from 'react-redux';

import { useAppSelector } from '@store/hook';
import { resultListSelector, toggleResultSelection } from '@store/result';

export const useResultListVM = () => {
  const dispatch = useDispatch();
  const resultList = useAppSelector(resultListSelector);

  const handleCheck = (id) => () => {
    dispatch(toggleResultSelection(id));
  };

  return { resultList, handleCheck };
};
