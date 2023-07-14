import { useState } from 'react';
import Modal from '../atoms/Modal';
import Form from '../molecules/Form/Form';
import { StyledButton, StyledModalChildren } from './style';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsFormSubmitted(false);
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  const handleButtonClick = async () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <StyledButton>
        <button
          className='js-modal-trigger button is-info is-rounded is-responsive is-focused is-inverted'
          data-target='modal-js-example'
          onClick={handleButtonClick}
        >
          Pridėti naują
        </button>
      </StyledButton>

      {isModalOpen && !isFormSubmitted && (
        <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
          <Form onSubmitSuccess={handleFormSubmit} />
        </Modal>
      )}
      {isFormSubmitted && (
        <Modal onClose={handleCloseModal} isOpen={true}>
          <StyledModalChildren>
            Vartotojas pridėtas sėkmingai
          </StyledModalChildren>
        </Modal>
      )}
    </>
  );
};

export default Header;
