import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { InfoModal } from '@components/modal/InfoModal';

import Close from '@assets/icons/modal/ic_close.svg';

import { useModalVM } from './modalVM';

export const Modal = () => {
  const { isVisible, type, handleCloseButtonClick } = useModalVM();

  if (!isVisible) return null;

  const renderModalContents = () => {
    switch (type) {
      case 'INFO_MODAL':
        return <InfoModal />;
      default:
        return null;
    }
  };

  return createPortal(
    <ModalOverlay>
      <ModalContainer>
        <div className="close-button">
          <Close width={20} height={20} onClick={handleCloseButtonClick} />
        </div>
        {renderModalContents()}
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('root')
  );
};

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.8);

  position: fixed;
  z-index: 2000;
  top: 0;
`;

const ModalContainer = styled.div`
  width: 347px;
  height: 423px;
  margin-top: 105px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};

  position: relative;
  z-index: 3000;

  .close-button {
    position: absolute;
    top: 13px;
    right: 13px;
  }
`;
