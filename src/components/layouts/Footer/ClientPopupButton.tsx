'use client';

import { FC, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import FeedbackFormPopup from '@/components/popups/FeedbackForm/FeedbackForm';

const ClientPopupButton: FC = () => {
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

  const handleSubmit = (formData: any) => {
    console.log(formData);
    setIsModalShown(false);
  };

  return (
    <>
      <Button type='button' variant='negative' onClick={handleButtonClick}>
        Связаться с нами
      </Button>
      {isModalShown && (
        <OverlayingPopup isOpened={isPopupVisible}>
          <FeedbackFormPopup
            title='Форма обратной связи'
            submitButtonText='Отправить'
            submitButtonHandler={handleSubmit}
            cancelButtonText=''
            cancelButtonHandler={handleCancel}
          />
        </OverlayingPopup>
      )}
    </>
  );
};

export default ClientPopupButton;
