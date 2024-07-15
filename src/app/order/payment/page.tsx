import { FC } from 'react';
import classNames from 'classnames';
import styles from './page.module.css';

import CardIcon from '@icons/card.svg';
import YooMoneyIcon from '@icons/yoomoney.svg';
import SberbankIcon from '@icons/sberbank.svg';
import YooKassaIcon from '@icons/yookassa.svg';

import CardForm from './CardForm/CardForm';

const Page: FC = () => {
  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <h1 className={styles.title}>Оплата заказа</h1>
      <div className={styles.body}>
        <CardForm />
        {/* <button className={classNames(styles.card, styles.button)} type='button'>
          <div className={styles.buttonHeader}>
            <CardIcon />
            Банковская карта
          </div>
          <div className={styles.buttonText}>
            Mastercard, VISA. Maestro, МИР
          </div>
        </button>
        <button className={classNames(styles.card, styles.button)} type='button'>
          <div className={styles.buttonHeader}>
            <YooMoneyIcon />
            ЮMoney
          </div>
          <div className={styles.buttonText}>
            Mastercard, VISA. Maestro, МИР
          </div>
        </button>
        <button className={classNames(styles.card, styles.button)} type='button'>
          <div className={styles.buttonHeader}>
            <SberbankIcon />
            Сбербанк
          </div>
          <div className={styles.buttonText}>
            Mastercard, VISA. Maestro, МИР
          </div>
        </button> */}
      </div>
      <div className={styles.footer}>
        <YooKassaIcon />
      </div>
    </div>
  );
};

export default Page;
