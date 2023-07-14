import React, { useEffect } from 'react';
import { StyledBox } from './style';

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ onClose, isOpen, children }) => {
  useEffect(() => {
    const closeModal = () => {
      onClose();
    };

    const handleModalCloseClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('.modal')) {
        closeModal();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    const modalCloseElements = document.querySelectorAll<HTMLElement>(
      '.modal-close, .modal-background'
    );
    modalCloseElements.forEach((close) => {
      close.addEventListener('click', handleModalCloseClick);
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      modalCloseElements.forEach((close) => {
        close.removeEventListener('click', handleModalCloseClick);
      });

      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal is-active'>
      <div className='modal-background'></div>
      <StyledBox className='modal-content'>
        <div className='box'>{children}</div>
      </StyledBox>
    </div>
  );
};

export default Modal;
