'use client';

import { FC, useEffect, useState } from 'react';

import Portal from '@/components/Portal';
import HamburgerMainMenu from '../HamburgerMainMenu/HamburgerMainMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HamburgerFooter from '../HamburgerFooter/HamburgerFooter';

import styles from './Hamburger.module.css';

export interface Menu {
  title: string;
  items: {
    name: string;
    url: string;
  }[];
}

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

const Hamburger: FC<Props> = ({ isOpened, onClose }) => {
  const [menu, setMenu] = useState<Menu | null>(null);

  const onCloseHandler = () => {
    setMenu(null);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = isOpened ? 'hidden' : '';
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.wrapper} onClick={onCloseHandler}>
        <div className={styles.body} onClick={event => event.stopPropagation()}>
          {!menu && <HamburgerMainMenu className={styles.mainMenu} setMenu={setMenu} onClose={onCloseHandler} />}
          {menu && <HamburgerMenu menu={menu} setMenu={setMenu} onClose={onCloseHandler} />}
          <HamburgerFooter className={styles.footer} />
        </div>
      </div>
    </Portal>
  );
};

export default Hamburger;
