import { useAppDispatch, useAppSelector } from '@store/hook';
import {
  hideModal,
  modalTypeSelector,
  modalVisibleSelector,
} from '@store/modal';

export const useModalVM = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(modalVisibleSelector);
  const type = useAppSelector(modalTypeSelector);

  const handleCloseButtonClick = () => {
    dispatch(hideModal());
  };

  return { isVisible, type, handleCloseButtonClick };
};
