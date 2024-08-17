'use client';

import React, { FC, FormEvent, ClipboardEvent, useState } from 'react';
import styles from './Form.module.css';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import { useParams, useRouter } from 'next/navigation';
import api from '@/api';

interface ApiResponse {
  errorMessage: string;
  message?: string;
  error?: string;
}

const Form: FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const params = useParams();
  const router = useRouter();
  const hash = params.id || '';

  const validatePassword = (password: string) => {
    return password.length >= 10;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError('Пароль должен содержать минимум 10 символов');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setError('');
    setSuccess(false);

    try {
      const response = await api.patch('authorization/change-password/', {
        json: {
          hash: hash,
          newPassword: password,
          newPasswordCheck: confirmPassword
        }
      });

      const data: ApiResponse = await response.json();

      if (response.ok && !(data.error || data.errorMessage)) {
        setSuccess(true);
        setShowPopup(true);
      } else {
        setError(data.errorMessage || 'Произошла ошибка при смене пароля');
      }
    } catch (error) {
      setError('Произошла ошибка при соединении с сервером');
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError('');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/signin');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.body}>
        <div className={styles.bodyField}>
          {error && <p className={styles.errorText}>{error}</p>}
          <div className={styles.bodyFieldLabel}>Новый пароль</div>
          <Input
            type='text'
            placeholder='Введите новый пароль'
            value={password}
            required={true}
            onChange={e => setPassword(e.target.value)}
            className={error ? styles.inputError : ''}
          />
          <div className={styles.bodyFieldLabel}>Повторите новый пароль</div>
          <Input
            type='text'
            placeholder='Повторите новый пароль'
            value={confirmPassword}
            required={true}
            onChange={e => setConfirmPassword(e.target.value)}
            onPaste={handlePaste}
            className={error ? styles.inputError : ''}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Button variant='negative' icon={false} type='submit' className={styles.button}>
          Изменить пароль
        </Button>
      </div>
      {showPopup && success && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Пароль успешно изменён!</h3>
            <p>Теперь вы можете войти с новым паролем.</p>
            <Button variant='negative' icon={false} onClick={handleClosePopup}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
