'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

import LogotypeIcon from '@icons/logotype.svg';

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
        <LogotypeIcon className={styles.logotype__icon} />
        <button className={styles.logotype__button} type='button' onClick={() => router.push('/about-company')}>
          О бренде
        </button>
      </div>
    </div>
  );
};

export default Hero;
