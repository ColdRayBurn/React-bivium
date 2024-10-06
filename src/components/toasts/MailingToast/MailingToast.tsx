'use client';

import { FC, useState, useRef } from 'react';

import Toast from '../Toast/Toast';
import EmailInput from './EmailInput/EmailInput';
import Checkbox from '@/components/ui/Checkbox/Checkbox';

import api from '@/api';
import { useAppSelector } from '@/redux/hooks';

import styles from './MailingToast.module.css';

const MailingToast: FC = () => {
  const { email: defaultEmail } = useAppSelector(user => user.user);

  const [isShown, setIsShown] = useState(true);
  const [email, setEmail] = useState<string | null>(defaultEmail || null);
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    if (email === null || !checkboxRef.current?.checked) {
      return;
    }

    api
      .put('mail/subscriptions/', {
        json: {
          email
        }
      })
      .finally(() => {
        setIsShown(false);
      });
  };

  if (!isShown) {
    return null;
  }

  return (
    <Toast title='Подписаться на новости и предложения' onClose={() => setIsShown(false)}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          Оставьте Ваш e-mail и получайте информацию о новинках и промокоды на скидки и подарки
        </div>
        <EmailInput onValid={setEmail} onInvalid={() => setEmail(null)} defaultValue={defaultEmail} />
        <Checkbox ref={checkboxRef} text='Я даю согласие на обработку персональных данных' defaultChecked />
        <button className={styles.button} type='button' onClick={onSubmit}>
          Принять
        </button>
      </div>
    </Toast>
  );
};

export default MailingToast;
