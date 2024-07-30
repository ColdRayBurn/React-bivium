'use client';

import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import Body from './Body';
import Sidebar from './Sidebar';

import api from '@/api';
import { IOrder } from '@/models';

import styles from './page.module.css';

const Page: FC = () => {
  const [orderData, setOrderData] = useState<IOrder | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    api.get('order/', { signal: abortController.signal }).json<IOrder>().then(setOrderData);
    return () => abortController.abort('aborted');
  }, []);

  return (
    <main className={classNames(styles.wrapper, 'container')}>
      <h1 className={styles.title}>Ваш заказ</h1>
      <div className={styles.content}>
        <Body orderData={orderData} />
        <Sidebar orderData={orderData} />
      </div>
    </main>
  );
};

export default Page;
