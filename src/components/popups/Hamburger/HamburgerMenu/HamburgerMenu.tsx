import { FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

import ArrowLeftIcon from '@icons/arrow-left.svg';

import styles from './HamburgerMenu.module.css';

import { Menu } from '../Desktop/Hamburger';

interface Props {
  menu: Menu;
  setMenu: Dispatch<SetStateAction<Menu | null>>;
  onClose: () => void;
}

const HamburgerMenu: FC<Props> = ({ menu: { title, items }, setMenu, onClose }) => {
  return (
    <div className={styles.wrapper}>
      <ArrowLeftIcon className={styles.arrow} />
      <div className={styles.body}>
        <button className={styles.title} type='button' onClick={() => setMenu(null)}>
          {title}
        </button>
        {items.map((item, itemIndex) => (
          <Link key={itemIndex} className={styles.item} href={item.url} onClick={() => onClose()}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
