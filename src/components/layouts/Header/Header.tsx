'use client';

import { FC, useRef, useEffect, useState, useCallback } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import HeaderSearch from './HeaderSearch/HeaderSearch';

import HamburgerIcon from '@icons/hamburger.svg';
import BiviumIcon from '@icons/bivium.svg';
import HeartIcon from '@icons/heart.svg';
import BagIcon from '@icons/bag.svg';
import UserIcon from '@icons/user.svg';

import { useAppSelector } from '@/redux/hooks';

import styles from './Header.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Header: FC = () => {
  const { isAuthorized, cartAmount, favoritesAmount } = useAppSelector(selector => selector.user);
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header === null) {
      return;
    }

    const windowScrollHandler = () => {
      if (previousScrollY <= scrollY && scrollY > parseFloat(getComputedStyle(header).height)) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      setPreviousScrollY(scrollY);
    };

    setPreviousScrollY(scrollY);
    window.addEventListener('scroll', windowScrollHandler);

    return () => window.removeEventListener('scroll', windowScrollHandler);
  }, [previousScrollY]);

  const onSearchSubmit = (query: string) => {
    console.log(query);
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.top}>
        <button className={styles.hamburgerMenuButton} type="button">
          <HamburgerIcon />
        </button>
        <Link className={styles.logotype} href="/">
          <MediaQuery minWidth={1281}>Bivium</MediaQuery>
          <MediaQuery maxWidth={1280}>
            <BiviumIcon />
          </MediaQuery>
        </Link>
        <div className={styles.controls}>
          <MediaQuery minWidth={1281}>
            <HeaderSearch onSubmit={onSearchSubmit} />
            <Link
              className={styles.control}
              href={isAuthorized ? '/personal/favorites' : '/signin'}
              data-amount={favoritesAmount ? favoritesAmount : undefined}
            >
              <HeartIcon />
            </Link>
          </MediaQuery>
          <Link className={styles.control} href="/cart" data-amount={cartAmount ? cartAmount : undefined}>
            <BagIcon />
          </Link>
          <Link className={styles.control} href={isAuthorized ? '/personal' : '/signin'}>
            <UserIcon />
          </Link>
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.navigationItem} type="button">
          Новинки
        </button>
        <button className={styles.navigationItem} type="button">
          Экипировка
        </button>
        <button className={styles.navigationItem} type="button">
          Одежда
        </button>
        <button className={styles.navigationItem} type="button">
          Аксессуары
        </button>
      </div>
    </header>
  );
};

export default Header;
