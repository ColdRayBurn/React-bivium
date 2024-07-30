import React, { FC, useState, useRef } from 'react';
import api from '@/api';
import Button from '@/components/ui/Button/Button';
import CrossIcon from '@icons/cross.svg';
import styles from './FeedbackForm.module.css';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import Input from '@/components/ui/Input/Input';
import TextArea from '@/components/ui/TextArea/TextArea';

interface FeedbackFormPopupProps {
  title?: string;
  cancelButtonText: string;
  cancelButtonHandler: () => void;
  submitButtonText: string;
  submitButtonHandler: (formData: any) => void;
}

const FeedbackFormPopup: FC<FeedbackFormPopupProps> = ({ title, cancelButtonHandler }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    socialLinks: '',
    phone: '',
    email: '',
    about: '',
    consent: false,
    file: null
  });

  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      consent: e.target.checked
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData
      });
      setFileName(e.target.files[0].name);
    }
  };

  const handleFileRemove = () => {
    setFormData({
      ...formData,
      file: null
    });
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const jsonData = {
        name: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        socialNetworks: formData.socialLinks,
        message: formData.about,
        page: window.location.pathname,
        file: formData.file ? formData.file : undefined
      };

      try {
        const response = await api.post('feedback/', {
          body: JSON.stringify(jsonData),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            firstName: '',
            lastName: '',
            socialLinks: '',
            phone: '',
            email: '',
            about: '',
            consent: false,
            file: null
          });
          setFileName(null);
        } else {
          const errorData = await response.json();
          console.error('Failed to submit form:', errorData);
        }
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhoneInputClick = () => {
    if (!formData.phone.startsWith('+7')) {
      setFormData({
        ...formData,
        phone: '+7'
      });
    }
  };

  const validateForm = () => {
    const phoneRegex = /^\+7\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (!phoneRegex.test(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: 'Введите корректный номер телефона в формате +71234567890' }));
      valid = false;
    }

    if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Введите корректный адрес электронной почты' }));
      valid = false;
    }

    return valid;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <button className={styles.closeButton} type='button' onClick={cancelButtonHandler}>
          <CrossIcon />
        </button>
      </div>
      <div className={styles.body}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            name='firstName'
            placeholder='Имя*'
            required={true}
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <Input
            name='lastName'
            placeholder='Фамилия*'
            required={true}
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <Input
            name='socialLinks'
            placeholder='Ссылки на соцсети*'
            required={true}
            value={formData.socialLinks}
            onChange={handleInputChange}
          />

          <div className={styles.fieldWrapper}>
            {errors.phone && <div className={styles.errorText}>{errors.phone}</div>}
            <Input
              className={`${errors.phone ? styles.error : ''}`}
              name='phone'
              type='tel'
              placeholder='Телефон*'
              required={true}
              value={formData.phone}
              onClick={handlePhoneInputClick}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.fieldWrapper}>
            {errors.email && <div className={styles.errorText}>{errors.email}</div>}
            <label>
              <div className={styles.email_title}>Email*</div>
              <Input
                className={`${errors.email ? styles.error : ''}`}
                name='email'
                type='email'
                placeholder='example@email.com'
                required={true}
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <TextArea name='about' placeholder='Немного о себе' value={formData.about} onChange={handleInputChange} />
          <div className={styles.required_text}>* поля обязательны для заполнения</div>
          {fileName ? (
            <div className={styles.fileWrapper}>
              <div className={styles.fileName} onClick={handleFileClick}>
                {fileName}
              </div>
              <button className={styles.removeButton} type='button' onClick={handleFileRemove}>
                <CrossIcon />
              </button>
            </div>
          ) : (
            <a href='#' className={styles.formAttachFile} onClick={handleFileClick}>
              Прикрепить файл
            </a>
          )}
          <input type='file' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          <Button variant='negative' icon={false}>
            Отправить
          </Button>

          <Checkbox
            className={styles.checkbox}
            checked={formData.consent}
            onChange={handleCheckboxChange}
            text='Я даю согласие на обработку персональных данных'
            required
          />
        </form>
      </div>
      {isSubmitted && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Форма успешно отправлена!</h3>
            <p>Мы свяжемся с Вами в ближайшее время</p>
            <Button variant='negative' icon={false} onClick={cancelButtonHandler}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackFormPopup;
