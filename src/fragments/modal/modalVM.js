import { useAppDispatch, useAppSelector } from '@store/hook';
import { hideModal, modalSelector } from '@store/modal';

export const useModalVM = () => {
  const dispatch = useAppDispatch();
  const { isVisible, type } = useAppSelector(modalSelector);

  const handleCloseButtonClick = () => {
    dispatch(hideModal());
  };

  return { isVisible, type, handleCloseButtonClick };
};
