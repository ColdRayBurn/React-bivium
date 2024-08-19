'use client';

import { FC, useState } from 'react';
import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import FeedbackFormPopup from '@/components/popups/FeedbackForm/FeedbackForm';
import Link from 'next/link';

interface ClientPopupButtonProps {
  linkText: string;
  formTitle?: string;
  submitText: string;
  cancelText: string;
  apiEndpoint: string;
  onFormSubmit?: (formData: any) => void;
  icon?: boolean;
}

const ClientPopupButton: FC<ClientPopupButtonProps> = ({
  linkText,
  formTitle,
  submitText,
  cancelText,
  apiEndpoint,
  onFormSubmit
}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleLinkClick = () => {
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
      <Link href={''} onClick={handleLinkClick}>
        {linkText}
      </Link>
      {isModalShown && (
        <OverlayingPopup isOpen={isPopupVisible}>
          <FeedbackFormPopup
            title={formTitle}
            submitButtonText={submitText}
            submitButtonHandler={handleSubmit}
            cancelButtonText={cancelText}
            cancelButtonHandler={handleCancel}
            apiEndpoint={apiEndpoint}
          />
        </OverlayingPopup>
      )}
    </>
  );
};

export default ClientPopupButton;
