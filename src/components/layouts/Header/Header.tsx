'use client';

import { FC } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderNavigationItem from './HeaderNavigtationItem/HeaderNavigationItem';

import HamburgerIcon from '@/assets/icons/hamburger.svg';
import BiviumIcon from '@/assets/icons/bivium.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import BagIcon from '@/assets/icons/bag.svg';
import UserIcon from '@/assets/icons/user.svg';

import { useAppSelector } from '@/redux/hooks';

import styles from './Header.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const navigation = [
  {
    id: 1,
    name: 'Новинки'
  },
  {
    id: 2,
    name: 'Экипировка',
    categories: [
      {
        id: 1,
        name: 'Мужская экипировка',
        subcategories: [
          [
            {
              id: 1,
              name: 'Бег'
            },
            {
              id: 2,
              name: 'Лыжи'
            }
          ],
          [
            {
              id: 1,
              name: 'Куртки'
            },
            {
              id: 2,
              name: 'Костюмы'
            },
            {
              id: 3,
              name: 'Жилеты'
            },
            {
              id: 4,
              name: 'Брюки'
            },
            {
              id: 5,
              name: 'Шорты'
            }
          ]
        ]
      },
      {
        id: 2,
        name: 'Женская экипировка',
        subcategories: [
          [
            {
              id: 1,
              name: 'Бег'
            },
            {
              id: 2,
              name: 'Лыжи'
            }
          ],
          [
            {
              id: 1,
              name: 'Куртки'
            },
            {
              id: 2,
              name: 'Костюмы'
            },
            {
              id: 3,
              name: 'Жилеты'
            },
            {
              id: 4,
              name: 'Брюки'
            },
            {
              id: 5,
              name: 'Шорты'
            }
          ]
        ]
      },
      {
        id: 3,
        name: 'Аксессуары',
        subcategories: [
          [
            {
              id: 1,
              name: 'Бег'
            },
            {
              id: 2,
              name: 'Лыжи'
            }
          ],
          [
            {
              id: 1,
              name: 'Куртки'
            },
            {
              id: 2,
              name: 'Костюмы'
            },
            {
              id: 3,
              name: 'Жилеты'
            },
            {
              id: 4,
              name: 'Брюки'
            },
            {
              id: 5,
              name: 'Шорты'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Одежда'
  },
  {
    id: 4,
    name: 'Аксессуары'
  }
];

const Header: FC = () => {
  const { isAuthorized, cartAmount, favoritesAmount } = useAppSelector(selector => selector.user);

  const onSearchSubmit = (query: string) => {
    console.log(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <button className={styles.hamburgerMenuButton} type='button'>
          <HamburgerIcon />
        </button>
        <Link className={styles.logotype} href='/'>
          <MediaQuery minWidth={1281} >
            Bivium
          </MediaQuery>
          <MediaQuery maxWidth={1280}>
            <BiviumIcon />
          </MediaQuery>
        </Link>
        <div className={styles.controls}>
          <MediaQuery minWidth={1281}>
            <HeaderSearch onSubmit={onSearchSubmit} />
            <Link className={styles.control} href={isAuthorized ? '/personal/favorites' : '/signin'} data-amount={favoritesAmount ? favoritesAmount : undefined}>
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
        {navigation.map(item => <HeaderNavigationItem key={item.id} title={item.name} categories={item?.categories} />)}
      </div>
    </header>
  );
};

export default Header;
