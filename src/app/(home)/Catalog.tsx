import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Catalog.module.css';

const Catalog: FC = () => {
  return (
    <section className={classNames(styles.container, 'container')}>
      <Link className={styles.card} href='#'>Мужская<br />экипировка</Link>
      <Link className={styles.card} href='#'>Женская<br />экипировка</Link>
      <Link className={styles.card} href='#'>Мужская<br />одежда</Link>
      <Link className={styles.card} href='#'>Женская<br />одежда</Link>
      <Link className={styles.card} href='#'>Аксессуары</Link>
    </section>
  );
};

export default Catalog;
