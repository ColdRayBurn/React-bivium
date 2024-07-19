'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import styles from './Form.module.css';

import api from '@/api';
import { HTTPError } from 'ky';
import { IAuthResponse, IErrorResponse } from '@/api/models';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';

import Link from 'next/link';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

interface IForm {
  email: string;
  password: string;
}

interface IFormMessage {
  text: string;
  color?: 'green' | 'red';
}

const Form: FC = () => {
  const router = useRouter();
  const dipatch = useAppDispatch();

  const [messages, setMessages] = useState<IFormMessage[]>([]);
  const { handleSubmit, register } = useForm<IForm>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<IForm> = async data => {
    try {
      const response = await api
        .post('authorization/signin/', {
          json: { username: data.email, password: data.password }
        })
        .json<IAuthResponse>();

      dipatch(setUser({ ...response.user, isAuthorized: true, isLoaded: true }));
      localStorage.setItem('token', response.token);

      setMessages([]);
      router.push('/personal');
    } catch (error: unknown) {
      const response: IErrorResponse = await (error as HTTPError).response.json();
      setMessages([{ text: response.errorMessage, color: 'red' }]);
    }
  };

  const onInvalid: SubmitErrorHandler<IForm> = errors => {
    setMessages(() => {
      const messages: IFormMessage[] = [];

      errors?.email?.message && messages.push({ text: errors!.email!.message!, color: 'red' });
      errors?.password?.message && messages.push({ text: errors!.password!.message!, color: 'red' });

      return messages;
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      {!!messages.length && (
        <div className={styles.messages}>
          {messages.map((message, messageIndex) => (
            <div key={messageIndex} className={classNames(styles.messagesItem, message.color && styles[message.color])}>
              {message.text}
            </div>
          ))}
        </div>
      )}
      <div className={styles.body}>
        <Input
          type='email'
          placeholder='E-Mail'
          {...register('email', { required: "Поле 'E-Mail' обязательно к заполнению." })}
        />
        <Input
          type='password'
          placeholder='Пароль'
          {...register('password', { required: "Поле 'Пароль' обязательно к заполнению." })}
        />
      </div>
      <div className={styles.footer}>
        <Button variant='negative' icon={false} type='submit'>
          Войти
        </Button>
        <Button variant='default' icon={false} type='button' onClick={() => router.push('/signup')}>
          Зарегистрироваться
        </Button>
      </div>
      <Link className={styles.link} href='' /* href='/password-recovery' */>
        Забыли пароль?
      </Link>
    </form>
  );
};

export default Form;
