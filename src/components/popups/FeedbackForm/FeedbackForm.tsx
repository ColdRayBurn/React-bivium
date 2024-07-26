import { FC, useState } from 'react';
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
    consent: false
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitButtonHandler(formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}></div>
        <button className={styles.closeButton} type='button' onClick={cancelButtonHandler}>
          <CrossIcon />
        </button>
      </div>
      <div className={styles.body}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input className={styles.addressFormControl} placeholder='Имя*' required={true} />

          <Input className={styles.addressFormControl} placeholder='Фамилия*' required={true} />

          <Input className={styles.addressFormControl} placeholder='Ссылки на соцсети*' required={true} />

          <Input className={styles.addressFormControl} type='tel' placeholder='Телефон*' required={true} />

          <label>
            <div className={styles.email_title}>Email*</div>
            <input type='email' name='email' value={formData.email} onChange={handleInputChange} required />
          </label>
          <TextArea className={styles.addressFormControl} placeholder={'Немного о себе'} />
          <div className={styles.required_text}>* поля обязательны для заполнения</div>
          <Button variant={'negative'} icon={false}>
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
