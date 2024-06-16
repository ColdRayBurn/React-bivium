'use client';

import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classNames from 'classnames';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navigation}>
      <Link className={classNames(styles.navigationItem, pathname.endsWith('/favorites') && styles.navigationItem_active)} href='/personal/favorites'>Избранное (0)</Link>
      <Link className={classNames(styles.navigationItem, pathname.endsWith('/orders') && styles.navigationItem_active)} href='/personal/orders'>Заказы</Link>
      <Link className={classNames(styles.navigationItem, pathname.endsWith('/personal') && styles.navigationItem_active)} href='/personal'>Данные</Link>
      <Link className={classNames(styles.navigationItem, pathname.endsWith('/subscriptions') && styles.navigationItem_active)} href='/personal/subscriptions'>Подписки</Link>
      <Link className={classNames(styles.navigationItem, pathname.endsWith('/bivium') && styles.navigationItem_active)} href='/personal/bivium'>Режим Bivium</Link>
    </div>
  );
};

export default Navigation;
