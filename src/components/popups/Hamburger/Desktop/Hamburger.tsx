'use client';

import { FC, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import Portal from '@/components/Portal';
import HamburgerMainMenu from '../HamburgerMainMenu/HamburgerMainMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HamburgerFooter from '../HamburgerFooter/HamburgerFooter';

import styles from './Hamburger.module.css';

export interface Menu {
  rootElement?: HTMLElement;
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
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const isTouch = useMediaQuery({ maxWidth: 1919 });
  const [menu, setMenu] = useState<Menu | null>(null);

  const onCloseHandler = () => {
    setMenu(null);
    onClose();
  };

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.wrapper} onClick={onCloseHandler}>
        <div ref={hamburgerRef} className={styles.body} onClick={event => event.stopPropagation()}>
          {isTouch && !menu && (
            <HamburgerMainMenu className={styles.mainMenu} setMenu={setMenu} onClose={onCloseHandler} />
          )}
          {!isTouch && <HamburgerMainMenu className={styles.mainMenu} setMenu={setMenu} onClose={onCloseHandler} />}
          {menu && <HamburgerMenu hamburgerRef={hamburgerRef} menu={menu} setMenu={setMenu} onClose={onCloseHandler} />}
          <HamburgerFooter className={styles.footer} />
        </div>
      </div>
    </Portal>
  );
};

export default Hamburger;
