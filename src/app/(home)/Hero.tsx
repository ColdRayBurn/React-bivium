'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

import LogotypeIcon from '@icons/logotype.svg';
import BiviumIcon from '@icons/header-logo.svg';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Hero: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper} style={{ backgroundImage: 'url(/images/hero.png)' }}>
      <div className={styles.text}>
        <b>Алексей Реунков</b>
        <br />
        <br />
        Чемпион России, участник Олимпийских игр, мастер спорта международного класса
      </div>
      <div className={styles.logotype}>
        <MediaQuery minWidth={768}>
          <LogotypeIcon className={styles.logotype__icon} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <BiviumIcon className={styles.logotype__icon} />
        </MediaQuery>
        <button className={styles.logotype__button} type='button' onClick={() => router.push('/about-company')}>
          О бренде
        </button>
      </div>
    </div>
  );
};

export default Hero;
