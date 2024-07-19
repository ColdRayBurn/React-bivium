'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import styles from './EmptyCart.module.css';

import ManOnSkis from '@icons/a-man-on-skis.svg';
import Button from '@/components/ui/Button/Button';

const EmptyCart: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <ManOnSkis />
      <h2 className={styles.title}>
        Ваша корзина
        <br />
        пока пуста
      </h2>
      <Button className={styles.button} variant='negative' icon={false} onClick={() => router.push('/catalog')}>
        Перейти к покупкам
      </Button>
    </div>
  );
};

export default EmptyCart;
