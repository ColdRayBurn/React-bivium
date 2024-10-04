import { FC, Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import ArrowRightIcon from '@icons/arrows-right.svg';

import styles from './HamburgerMainMenu.module.css';

import { Menu } from '../Desktop/Hamburger';

interface Props {
  setMenu: Dispatch<SetStateAction<Menu | null>>;
  onClose: () => void;
  className?: string;
}

const HamburgerMainMenu: FC<Props> = ({ setMenu, onClose, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Link className={styles.item} href='/contacts' onClick={() => onClose()}>
        Где купить?
      </Link>
      <div className={styles.divider}></div>
      <button
        className={styles.item}
        type='button'
        onClick={() =>
          setMenu({
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
        onClick={() =>
          setMenu({
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
        onClick={() =>
          setMenu({
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
      <div className={styles.divider}></div>
      <Link className={styles.item} href='/' onClick={() => onClose()}>
        Личный кабинет
      </Link>
      <Link className={styles.item} href='/' onClick={() => onClose()}>
        Избранное
      </Link>
    </div>
  );
};

export default HamburgerMainMenu;
