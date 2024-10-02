'use client';

import { FC, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderMobileSearch from './HeaderMobileSearch/HeaderMobileSearch';
import Hamburger from '@/components/popups/Hamburger/Desktop/Hamburger';

import HamburgerIcon from '@icons/hamburger.svg';
import LogotypeIcon from '@icons/logotype.svg';
import BiviumIcon from '@icons/bivium.svg';
import HeartIcon from '@icons/heart.svg';
import BasketIcon from '@icons/basket.svg';
import UserIcon from '@icons/user.svg';

import { useAppSelector } from '@/redux/hooks';

import styles from './Header.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Header: FC = () => {
  const { isAuthorized } = useAppSelector(selector => selector.user);
  const cart = useAppSelector(selector => selector.cart);
  const favorites = useAppSelector(selector => selector.favorites);

  const router = useRouter();
  const pathname = usePathname();

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current!;

    const onScroll = () => {
      header.classList.toggle(styles.background, window.scrollY > 0);
    };

    if (pathname === '/') {
      header.classList.toggle(styles.fixed, true);
      header.classList.toggle(styles.background, window.scrollY > 0);
      window.addEventListener('scroll', onScroll);
    } else {
      header.classList.toggle(styles.fixed, false);
      header.classList.toggle(styles.background, true);
    }

    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [pathname]);

  const onSearchSubmit = (query: string) => {
    router.push(`/catalog?searchQuery=${query}`);
  };

  return (
    <>
      <header ref={headerRef} className={styles.wrapper}>
        <div className={classNames(styles.container, 'container')}>
          <MediaQuery minWidth={1920}>
            <button className={styles.hamburgerMenuButton} type='button' onClick={() => setIsHamburgerOpen(true)}>
              <HamburgerIcon />
            </button>
          </MediaQuery>
          <MediaQuery maxWidth={1919}>
            <Link className={styles.firstLogotype} href='/'>
              <LogotypeIcon />
            </Link>
          </MediaQuery>
          <div className={styles.navigation}>
            <Link className={styles.navigationItem} href='/catalog'>
              Новинки
            </Link>
            <Link className={styles.navigationItem} href='/catalog/equipment'>
              Экипировка
            </Link>
            <Link className={styles.navigationItem} href='/catalog/clothing'>
              Одежда
            </Link>
            <Link className={styles.navigationItem} href='/catalog/accessories'>
              Аксессуары
            </Link>
          </div>
          <Link className={styles.logotype} href='/'>
            <BiviumIcon />
          </Link>
          <div className={styles.controls}>
            <MediaQuery minWidth={1281}>
              <HeaderSearch onSubmit={onSearchSubmit} />
            </MediaQuery>
            <MediaQuery maxWidth={1280}>
              <HeaderMobileSearch onSubmit={onSearchSubmit} />
            </MediaQuery>
            <MediaQuery minWidth={1920}>
              <Link
                className={styles.control}
                href={isAuthorized ? '/personal/favorites' : '/signin'}
                data-amount={favorites.length > 0 ? favorites.length : undefined}
              >
                <HeartIcon />
              </Link>
            </MediaQuery>
            <Link
              className={styles.control}
              href='/cart'
              data-amount={!!cart.products.length ? cart.products.length : undefined}
            >
              <BasketIcon />
            </Link>
            <MediaQuery minWidth={1920}>
              <Link className={styles.control} href={isAuthorized ? '/personal' : '/signin'}>
                <UserIcon />
              </Link>
            </MediaQuery>
          </div>
          <MediaQuery maxWidth={1919}>
            <button className={styles.hamburgerMenuButton} type='button' onClick={() => setIsHamburgerOpen(true)}>
              <HamburgerIcon />
            </button>
          </MediaQuery>
        </div>
      </header>
      <Hamburger isOpened={isHamburgerOpen} onClose={() => setIsHamburgerOpen(false)} />
    </>
  );
};

export default Header;
