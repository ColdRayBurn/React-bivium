'use client';

import { FC, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import ConfirmDialogPopup from '@/components/popups/ConfirmDialogPopup/ConfirmDialogPopup';

interface ClientPopupButtonProps {
  buttonText: string;
}

const ClientPopupButton: FC<ClientPopupButtonProps> = ({ buttonText }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
    setIsModalShown(true);
  };

  const handleCancel = () => {
    setPopupVisible(false);
    setIsModalShown(false);
  };

  const handleSubmit = () => {
    setIsModalShown(false);
  };

  return (
    <>
      <Button type='button' variant='negative' onClick={handleButtonClick}>
        {buttonText}
      </Button>
      {isModalShown && (
        <OverlayingPopup isOpen={isPopupVisible}>
          <ConfirmDialogPopup
            title='Отписаться от рассылки?'
            submitButtonText='Подтвердить'
            submitButtonHandler={handleSubmit}
            cancelButtonText='Отмена'
            cancelButtonHandler={handleCancel}
          />
        </OverlayingPopup>
      )}
    </>
  );
};

export default ClientPopupButton;
