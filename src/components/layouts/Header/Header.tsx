'use client';

import { FC, useRef, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import Hamburger from '@/components/popups/Hamburger/Desktop/Hamburger';
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
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { isAuthorized, cartAmount, favoritesAmount } = useAppSelector(selector => selector.user);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onLoad = () => {
      document.styleSheets[0].insertRule(`
        :root {
          --header-height: ${getComputedStyle(headerRef.current!).height}
        }
      `);
    };

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  const onSearchSubmit = (query: string) => {
    console.log(query);
  };

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <div className={styles.top}>
          <button className={styles.hamburgerMenuButton} type='button' onClick={() => setIsHamburgerOpen(true)}>
            <HamburgerIcon />
          </button>
          <Link className={styles.logotype} href='/'>
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
            <Link className={styles.control} href='/cart' data-amount={cartAmount ? cartAmount : undefined}>
              <BagIcon />
            </Link>
            <Link className={styles.control} href={isAuthorized ? '/personal' : '/signin'}>
              <UserIcon />
            </Link>
          </div>
        </div>
        <div className={styles.navigation}>
          <button className={styles.navigationItem} type='button'>
            Новинки
          </button>
          <button className={styles.navigationItem} type='button'>
            Экипировка
          </button>
          <button className={styles.navigationItem} type='button'>
            Одежда
          </button>
          <button className={styles.navigationItem} type='button'>
            Аксессуары
          </button>
        </div>
      </header>
      <Hamburger isOpened={isHamburgerOpen} onClose={() => setIsHamburgerOpen(false)} />
    </>
  );
};

export default Header;
