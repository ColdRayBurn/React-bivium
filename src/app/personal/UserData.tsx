'use client';

import { FC, useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './UserData.module.css';

import Input from '@/components/ui/Input/Input';
import ControlLabel from '@/components/ui/ControlLabel/ControlLabel';
import RadioButton from '@/components/ui/RadioButton/RadioButton';
import Button from '@/components/ui/Button/Button';

import api from '@/api';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
import { IUser } from '@/models';

interface IForm {
  name: string;
  surname: string;
  patronymic: string;
  birthday: string;
  gender: IUser['gender'];
  phonenumber: string;
  email: string;
}

const UserData: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selector => selector.user);

  const { register, handleSubmit, reset } = useForm<IForm>({
    mode: 'onSubmit',
    defaultValues: {
      name: user.name ?? undefined,
      surname: user.surname ?? undefined,
      patronymic: user.patronymic ?? undefined,
      gender: user.gender ?? undefined,
      phonenumber: user.phonenumber ?? undefined,
      email: user.email ?? undefined
    }
  });

  const birthdayInputId = useId();
  const phonenumberInputId = useId();
  const emailInputId = useId();

  const onSubmit: SubmitHandler<IForm> = data => {
    api.patch('user/', { json: data }).then(() => {
      dispatch(setUser({ ...user, ...data, isAuthorized: true, isLoaded: true }));
    }).catch(() => {
      reset();
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fullname}>
        <Input placeholder='Фамилия' type='text' {...register('surname')} />
        <Input placeholder='Имя' type='text' {...register('name', { required: true })} />
        <Input placeholder='Отчество' type='text' {...register('patronymic')} />
      </div>
      <ControlLabel className={styles.birthday} title='Дата рождения' htmlFor={birthdayInputId}>
        <Input id={birthdayInputId} type='text' placeholder='ДД. ММ. ГГГГ' {...register('birthday')} />
      </ControlLabel>
      <ControlLabel className={styles.gender} title='Пол' >
        <div className={styles.genderWrapper}>
          <RadioButton text='Мужской' value='male' {...register('gender')} />
          <RadioButton text='Женский' value='female' {...register('gender')} />
        </div>
      </ControlLabel>
      <ControlLabel className={styles.phonenumber} title='Телефон' htmlFor={phonenumberInputId}>
        <Input id={phonenumberInputId} type='text' placeholder='+7 ___ ___ __ __' {...register('phonenumber')} />
      </ControlLabel>
      <ControlLabel className={styles.email} title='E-Mail' htmlFor={emailInputId}>
        <Input id={emailInputId} type='email' placeholder='email@example.com' {...register('email', { required: true })} />
      </ControlLabel>
      <Button className={styles.submitButton} variant='negative' type='submit' icon={false}>Сохранить</Button>
    </form>
  );
};

export default UserData;
