'use client';

import { FC, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import FeedbackFormPopup from '@/components/popups/FeedbackForm/FeedbackForm';

interface ClientPopupButtonProps {
  buttonText: string;
  formTitle?: string;
  submitButtonText: string;
  cancelButtonText: string;
  apiEndpoint: string;
  onFormSubmit?: (formData: any) => void;
}

const ClientPopupButton: FC<ClientPopupButtonProps> = ({
  buttonText,
  formTitle,
  submitButtonText,
  cancelButtonText,
  apiEndpoint,
  onFormSubmit
}) => {
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
    setIsModalShown(false);
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <>
      <Button type='button' variant='negative' onClick={handleButtonClick}>
        {buttonText}
      </Button>
      {isModalShown && (
        <OverlayingPopup isOpen={isPopupVisible}>
          <FeedbackFormPopup
            title={formTitle}
            submitButtonText={submitButtonText}
            submitButtonHandler={handleSubmit}
            cancelButtonText={cancelButtonText}
            cancelButtonHandler={handleCancel}
            apiEndpoint={apiEndpoint}
          />
        </OverlayingPopup>
      )}
    </>
  );
};

export default ClientPopupButton;
