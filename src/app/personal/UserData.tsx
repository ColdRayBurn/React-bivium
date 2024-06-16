import { FC, useId } from 'react';
import styles from './UserData.module.css';

import Input from '@/components/ui/Input/Input';
import ControlLabel from '@/components/ui/ControlLabel/ControlLabel';
import RadioButton from '@/components/ui/RadioButton/RadioButton';
import Button from '@/components/ui/Button/Button';

const UserData: FC = () => {
  const birthdayInputId = useId();
  const phonenumberInputId = useId();
  const emailInputId = useId();

  return (
    <div className={styles.wrapper}>
      <div className={styles.fullname}>
        <Input placeholder='Фамилия' />
        <Input placeholder='Имя' />
        <Input placeholder='Отчество' />
      </div>
      <ControlLabel className={styles.birthday} title='Дата рождения' htmlFor={birthdayInputId}>
        <Input id={birthdayInputId} placeholder='ДД. ММ. ГГГГ' />
      </ControlLabel>
      <ControlLabel className={styles.gender} title='Пол' >
        <div className={styles.genderWrapper}>
          <RadioButton text='Мужской' name='gender' value='male' />
          <RadioButton text='Женский' name='gender' value='female' />
        </div>
      </ControlLabel>
      <ControlLabel className={styles.phonenumber} title='Телефон' htmlFor={phonenumberInputId}>
        <Input id={phonenumberInputId} placeholder='+7 ___ ___ __ __' />
      </ControlLabel>
      <ControlLabel className={styles.email} title='E-Mail' htmlFor={emailInputId}>
        <Input id={emailInputId} placeholder='email@example.com' />
      </ControlLabel>
      <Button className={styles.submitButton} variant='negative' type='submit' icon={false}>Сохранить</Button>
    </div>
  );
};

export default UserData;
