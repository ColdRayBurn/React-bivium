'use client';

import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

import Input from '@/components/ui/Input/Input';
import ProductCard from '@/components/ui/ProductCard/ProductCard';

import MailIcon from '@icons/mail.svg';
import CrossIcon from '@icons/cross.svg';

import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import ConfirmDialogPopup from '@/components/popups/ConfirmDialogPopup/ConfirmDialogPopup';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Page: FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <div className={styles.wrapper}>
      <MediaQuery maxWidth={1280}>
        <div className={styles.pageTitle}>Подписки</div>
      </MediaQuery>
      <div className={styles.title}>Распродажи и скидки</div>
      {isSubscribed && <Input className={styles.emailInput} defaultValue={'example@example.com'} disabled />}
      <button
        className={styles.button}
        type='button'
        onClick={() => {
          if (isSubscribed) {
            setIsModalShown(true);
          } else {
            setIsSubscribed(true);
          }
        }}
      >
        {isSubscribed ? <CrossIcon /> : <MailIcon />}
        {isSubscribed ? 'Отписаться' : 'Подписаться'}
      </button>
      <div className={styles.products}>
        <div className={styles.productsTitle}>Поступление товаров</div>
        <div className={styles.productsBody}>
          <div className={styles.productsItem}>
            <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='123' price={123} small inStock />
            <button className={styles.unsubscribeButton} type='button'>
              Больше не интересует
            </button>
          </div>
          <div className={styles.productsItem}>
            <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='321' price={123} small inStock />
            <button className={styles.unsubscribeButton} type='button'>
              Больше не интересует
            </button>
          </div>
          <div className={styles.productsItem}>
            <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='321' price={123} small inStock />
            <button className={styles.unsubscribeButton} type='button'>
              Больше не интересует
            </button>
          </div>
        </div>
      </div>
      <OverlayingPopup isOpened={isModalShown}>
        <ConfirmDialogPopup
          title='Отписаться от рассылки?'
          submitButtonText='Подтвердить'
          submitButtonHandler={() => {
            setIsSubscribed(false);
            setIsModalShown(false);
          }}
          cancelButtonText='Отмена'
          cancelButtonHandler={() => setIsModalShown(false)}
        />
      </OverlayingPopup>
    </div>
  );
};

export default Page;
