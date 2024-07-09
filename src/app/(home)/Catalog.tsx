import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Catalog.module.css';

const Catalog: FC = () => {
  return (
    <section className={classNames(styles.container, 'container')}>
      <Link className={styles.card} href='/catalog'>Мужская<br />экипировка</Link>
      <Link className={styles.card} href='/catalog'>Женская<br />экипировка</Link>
      <Link className={styles.card} href='/catalog'>Мужская<br />одежда</Link>
      <Link className={styles.card} href='/catalog'>Женская<br />одежда</Link>
      <Link className={styles.card} href='/catalog'>Аксессуары</Link>
    </section>
  );
};

export default Catalog;
