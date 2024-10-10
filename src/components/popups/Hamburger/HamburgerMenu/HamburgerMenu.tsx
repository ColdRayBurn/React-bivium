import { FC, Dispatch, SetStateAction, useEffect, useState, RefObject, useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import ArrowLeftIcon from '@icons/arrow-left.svg';

import styles from './HamburgerMenu.module.css';

import { Menu } from '../Desktop/Hamburger';

interface Props {
  hamburgerRef: RefObject<HTMLElement>;
  menu: Menu;
  setMenu: Dispatch<SetStateAction<Menu | null>>;
  onClose: () => void;
}

const HamburgerMenu: FC<Props> = ({ hamburgerRef, menu: { rootElement, title, items }, setMenu, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    const wrapperElement = wrapperRef.current!;
    const hamburgerElement = hamburgerRef.current!;

    setIsPopup(rootElement !== undefined);
    if (rootElement === undefined) {
      return;
    }

    setTimeout(() => {
      wrapperElement.style.top = `calc(${rootElement.getBoundingClientRect().top}px - 30px)`;
      wrapperElement.style.left = `calc(${getComputedStyle(hamburgerElement).width} + ${getComputedStyle(hamburgerElement).marginLeft} +  10px)`;
    }, 1);

    rootElement.style.color = 'var(--color-accent-primary)';

    return () => {
      rootElement.style.color = '';
    };
  }, [rootElement, hamburgerRef]);

  return (
    <div ref={wrapperRef} className={classNames(styles.wrapper, isPopup && styles.popup)}>
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
