import { FC, Dispatch, SetStateAction } from 'react';
import { useMediaQuery } from 'react-responsive';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import classNames from 'classnames';

import ArrowRightIcon from '@icons/arrows-right.svg';

import styles from './HamburgerMainMenu.module.css';

import { Menu } from '../Desktop/Hamburger';

interface Props {
  setMenu: Dispatch<SetStateAction<Menu | null>>;
  onClose: () => void;
  className?: string;
}

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const HamburgerMainMenu: FC<Props> = ({ setMenu, onClose, className }) => {
  const isTouch = useMediaQuery({ maxWidth: 1919 });

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Link className={styles.item} href='/contacts' onClick={() => onClose()}>
        Где купить?
      </Link>
      <div className={styles.divider}></div>
      <button
        className={styles.item}
        type='button'
        onClick={event =>
          setMenu({
            rootElement: !isTouch ? event.currentTarget : undefined,
            title: 'Каталог',
            items: [
              { name: 'Бег', url: '/' },
              { name: 'Лыжи', url: '/' },
              { name: 'Повседневный стиль', url: '/' },
              { name: 'Аксессуары', url: '/' }
            ]
          })
        }
      >
        Каталог
        <ArrowRightIcon />
      </button>
      <Link className={styles.item} href='/' onClick={() => onClose()}>
        Аксессуары
      </Link>
      <div className={styles.divider}></div>
      <button
        className={styles.item}
        type='button'
        onClick={event =>
          setMenu({
            rootElement: !isTouch ? event.currentTarget : undefined,
            title: 'Сотрудничество',
            items: [
              { name: 'Условия сотрудничества для оптовых покупателей', url: '/conditions' },
              { name: 'Стать тестировщиком', url: '/testers' },
              { name: 'Команда бренда', url: '/' }
            ]
          })
        }
      >
        Сотрудничество
        <ArrowRightIcon />
      </button>
      <Link className={styles.item} href='/ambassadors' onClick={() => onClose()}>
        Амбассадоры
      </Link>
      <button
        className={styles.item}
        type='button'
        onClick={event =>
          setMenu({
            rootElement: !isTouch ? event.currentTarget : undefined,
            title: 'Лукбук BIVIUM',
            items: []
          })
        }
      >
        Лукбук BIVIUM
        <ArrowRightIcon />
      </button>
      <button
        className={styles.item}
        type='button'
        onClick={event =>
          setMenu({
            rootElement: !isTouch ? event.currentTarget : undefined,
            title: 'Помощь',
            items: [
              { name: 'Контакты', url: '/contacts' },
              { name: 'Размерная таблица', url: '/sizes' },
              { name: 'Оплата товара', url: '/payment' },
              { name: 'Условия доставки', url: '/delivery' },
              { name: 'Возврат товара', url: '/return' },
              { name: 'Знаки и уход за товарами', url: '/care' },
              { name: 'Акции', url: '/promotions' }
            ]
          })
        }
      >
        Помощь
        <ArrowRightIcon />
      </button>
      <MediaQuery maxWidth={1919}>
        <div className={styles.divider}></div>
        <Link className={styles.item} href='/' onClick={() => onClose()}>
          Личный кабинет
        </Link>
      </MediaQuery>
      <Link className={styles.item} href='/' onClick={() => onClose()}>
        Избранное
      </Link>
    </div>
  );
};

export default HamburgerMainMenu;
