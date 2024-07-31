'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppSelector } from '@/redux/hooks';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
  const pathname = usePathname();
  const favorites = useAppSelector(selector => selector.favorites);

  return (
    <div className={styles.navigation}>
      <Link
        className={classNames(styles.navigationItem, pathname.endsWith('/favorites') && styles.navigationItem_active)}
        href='/personal/favorites'
      >
        Избранное ({favorites.length})
      </Link>
      <Link
        className={classNames(styles.navigationItem, pathname.endsWith('/orders') && styles.navigationItem_active)}
        href='/personal/orders'
      >
        Заказы
      </Link>
      <Link
        className={classNames(styles.navigationItem, pathname.endsWith('/personal') && styles.navigationItem_active)}
        href='/personal'
      >
        Данные
      </Link>
      <Link
        className={classNames(
          styles.navigationItem,
          pathname.endsWith('/subscriptions') && styles.navigationItem_active
        )}
        href='/personal/subscriptions'
      >
        Подписки
      </Link>
    </div>
  );
};

export default Navigation;
