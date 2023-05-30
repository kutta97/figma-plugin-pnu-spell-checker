import React from 'react';
import { createPortal } from 'react-dom';

import { ToastMessage } from '@components/toast/ToastMessage';

import { useToastVM } from './toastVM';

export const Toast = () => {
  const { isVisible, message } = useToastVM();

  if (!isVisible) return null;

  return createPortal(
    <ToastMessage>{message}</ToastMessage>,
    document.getElementById('root')
  );
};
