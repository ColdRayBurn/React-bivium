import { FC, useState, useRef } from 'react';
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

const FeedbackFormPopup: FC<FeedbackFormPopupProps> = ({
  title,
  cancelButtonText,
  cancelButtonHandler,
  submitButtonText,
  submitButtonHandler
}) => {
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

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      consent: e.target.checked
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitButtonHandler(formData);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
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
            className={styles.addressFormControl}
            name='firstName'
            placeholder='Имя*'
            required={true}
            onChange={handleInputChange}
          />

          <Input
            className={styles.addressFormControl}
            name='lastName'
            placeholder='Фамилия*'
            required={true}
            onChange={handleInputChange}
          />

          <Input
            className={styles.addressFormControl}
            name='socialLinks'
            placeholder='Ссылки на соцсети*'
            required={true}
            onChange={handleInputChange}
          />

          <Input
            className={styles.addressFormControl}
            name='phone'
            type='tel'
            placeholder='Телефон*'
            required={true}
            onChange={handleInputChange}
          />

          <label>
            <div className={styles.email_title}>Email*</div>
            <Input
              className={styles.addressFormControl}
              name='email'
              type='email'
              placeholder='example@email.com'
              required={true}
              onChange={handleInputChange}
            />
          </label>
          <TextArea
            className={styles.addressFormControl}
            name='about'
            placeholder='Немного о себе'
            onChange={handleInputChange}
          />
          <div className={styles.required_text}>* поля обязательны для заполнения</div>
          <a href='#' className={styles.formAttachFile} onClick={handleFileClick}>
            Прикрепить файл
          </a>
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
    </div>
  );
};

export default FeedbackFormPopup;
