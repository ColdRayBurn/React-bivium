'use client';

import { FC, KeyboardEventHandler } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './CardForm.module.css';

import CardIcon from '@icons/card.svg';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

interface IForm {
  card: string;
  month: number;
  year: number;
  cvc: number;
}

const CardForm: FC = () => {
  const { register, setValue, setFocus, trigger, handleSubmit } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data);
  };

  const onCardNumberKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Backspace') {
      return;
    }

    const element = event.target as HTMLInputElement;
    if ([4, 9, 14, 19].includes(element.value.length) && element.value.length <= 18) {
      setValue('card', element.value + ' ');
    }
  };

  const onCardNumberKeyUp: KeyboardEventHandler<HTMLInputElement> = event => {
    const element = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      element.value = element.value.trim();
    }

    if (element.value.length === 19) {
      setFocus('month', { shouldSelect: false });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <CardIcon />
        Банковская карта
      </div>
      <div className={styles.description}>Mastercard, VISA. Maestro, МИР</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles.formCardInput}
          placeholder="XXXX XXXX XXXX XXXX"
          type="text"
          maxLength={19}
          onKeyDown={onCardNumberKeyDown}
          onKeyUp={onCardNumberKeyUp}
          {...register('card', {
            maxLength: 19
          })}
        />
        <div className={styles.formRow}>
          <div className={styles.formDate}>
            <Input
              className={styles.formMonthInput}
              placeholder="ММ"
              size={2}
              maxLength={2}
              type="text"
              onKeyUp={event => {
                const element = event.target as HTMLInputElement;

                if (element.value.length >= 2) {
                  setFocus('year', { shouldSelect: false });
                } else if (element.value.length === 0 && event.key === 'Backspace') {
                  setFocus('card', { shouldSelect: false });
                }
              }}
              {...register('month', {
                maxLength: 2
              })}
            />
            <div className={styles.formDateSeparator}>/</div>
            <Input
              className={styles.formYearInput}
              placeholder="ГГ"
              size={2}
              maxLength={2}
              onKeyUp={event => {
                const element = event.target as HTMLInputElement;

                if (element.value.length >= 2) {
                  setFocus('cvc', { shouldSelect: false });
                } else if (element.value.length === 0 && event.key === 'Backspace') {
                  setFocus('month', { shouldSelect: false });
                }
              }}
              {...register('year', {
                maxLength: 2
              })}
            />
          </div>
          <Input className={styles.formCVCInput} placeholder="CVC" size={3} maxLength={3} />
        </div>
        <Button className={styles.formSubmitButton} variant="negative" icon={false} type="submit">
          Заплатить 11 300 ₽
        </Button>
      </form>
      <div className={styles.text}>
        Нажимая на кнопку Вы принимаете
        <br />
        <span>условия сервиса</span>
      </div>
    </div>
  );
};

export default CardForm;
