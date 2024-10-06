'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Toast from '../Toast/Toast';

import styles from './CookieToast.module.css';

const CookieToast: FC = () => {
  const [isAccepted, setIsAccepted] = useState(!!localStorage.getItem('cookies') || false);

  if (isAccepted) {
    return null;
  }

  return (
    <Toast title='Cookie-файлы на сайте' onClose={() => setIsAccepted(true)}>
      <div className={styles.text}>
        Для обеспечения высокого качества обслуживания и улучшения работы нашего интернет-магазина одежды, мы используем
        файлы cookie. Cookie – это небольшие текстовые файлы, которые сохраняются на вашем устройстве и помогают нам
        узнавать вас при последующих визитах, а также анализировать ваши предпочтения и поведение на сайте.
      </div>
      <div className={styles.buttons}>
        <Link className={styles.button} href='/cookies'>
          Подробнее
        </Link>
        <button
          className={classNames(styles.button, styles.button_filled)}
          type='button'
          onClick={() => {
            localStorage.setItem('cookies', 'true');
            setIsAccepted(true);
          }}
        >
          Принять все
        </button>
      </div>
    </Toast>
  );
};

export default CookieToast;
