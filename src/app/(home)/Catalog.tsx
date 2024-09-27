'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import styles from './Catalog.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  className?: string;
}

const Catalog: FC<Props> = ({ className }) => {
  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <Link
        className={styles.card}
        href='/catalog/mens-running'
        style={{ backgroundImage: 'url(https://i.imgur.com/yF9iKg0.png)' }}
      >
        <div className={styles.card__title}>Мужская коллекция</div>
        <div className={styles.card__badge}>S24_run</div>
      </Link>
      <Link
        className={styles.card}
        href='/catalog/womens-running'
        style={{ backgroundImage: 'url(https://i.imgur.com/wigbpDj.png)' }}
      >
        <div className={styles.card__title}>Женская коллекция</div>
        <div className={styles.card__badge}>S24_run</div>
      </Link>
      <Link
        className={styles.card}
        href='/catalog/mens-running'
        style={{ backgroundImage: 'url(https://i.imgur.com/zZgtjzB.png)' }}
      >
        <div className={styles.card__title}>Повседневная одежда</div>
        <div className={styles.card__badge}>S24_r25</div>
      </Link>
      <Link
        className={styles.card}
        href='/catalog/accessories'
        style={{ backgroundImage: 'url(https://i.imgur.com/tLxypel.png)' }}
      >
        <div className={styles.card__title}>Аксессуары</div>
        <div className={styles.card__badge}>S24_run</div>
      </Link>
    </section>
  );
};

export default Catalog;
