'use client';

import { FC, useState } from 'react';
import styles from './page.module.css';

import Input from '@/components/ui/Input/Input';
import ProductCard from '@/components/ui/ProductCard/ProductCard';

import MailIcon from '@/assets/icons/mail.svg';
import CrossIcon from '@/assets/icons/cross.svg';

const Page: FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Распродажи и скидки</div>
      {isSubscribed && <Input className={styles.emailInput} defaultValue={'example@example.com'} disabled />}
      <button className={styles.button} type='button' onClick={() => setIsSubscribed(isSubscribed => !isSubscribed)}>
        {isSubscribed ? <CrossIcon /> : <MailIcon />}
        {isSubscribed ? 'Отписаться' : 'Подписаться'}
      </button>
      <div className={styles.products}>
        <div className={styles.productsTitle}>Поступление товаров</div>
        <div className={styles.productsBody}>
          <div className={styles.productsItem}>
            <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='123' price={123} small />
            <button className={styles.unsubscribeButton} type='button'>Больше не интересует</button>
          </div>
          <div className={styles.productsItem}>
            <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='321' price={null} small />
            <button className={styles.unsubscribeButton} type='button'>Больше не интересует</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
