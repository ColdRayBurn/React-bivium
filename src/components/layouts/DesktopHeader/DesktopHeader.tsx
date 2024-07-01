'use client';

import { FC } from 'react';
import Link from 'next/link';
import styles from './DesktopHeader.module.css';

import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderNavigationItem from './HeaderNavigtationItem/HeaderNavigationItem';

import HamburgerIcon from '@/assets/icons/hamburger.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import BagIcon from '@/assets/icons/bag.svg';
import UserIcon from '@/assets/icons/user.svg';

import { useAppSelector } from '@/redux/hooks';

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

const DesktopHeader: FC = () => {
  const { isAuthorized } = useAppSelector(selector => selector.user);

  const onSearchSubmit = (query: string) => {
    console.log(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <button type='button'>
          <HamburgerIcon />
        </button>
        <Link className={styles.logotype} href='/'>Bivium</Link>
        <div className={styles.controls}>
          <HeaderSearch onSubmit={onSearchSubmit} />
          <Link className={styles.control} href={isAuthorized ? '/personal/favorites' : '/signin'}>
            <HeartIcon />
          </Link>
          <Link className={styles.control} href='/cart' data-amount={12}>
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

export default DesktopHeader;
