'use client';

import { ReactNode } from 'react';
import styles from './OverlayingPopup.module.css';

import Portal from '@/components/Portal';

type OverlayingPopupProps = {
  isOpened: boolean;
  children: ReactNode;
};

const OverlayingPopup = ({ children, isOpened }: OverlayingPopupProps) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.wrapper}>
        {children}
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
