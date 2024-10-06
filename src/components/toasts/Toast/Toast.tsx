'use client';

import { FC, ReactElement } from 'react';

import CrossIcon from '@icons/cross.svg';

import styles from './Toast.module.css';

interface Props {
  title: string;
  children: ReactElement | ReactElement[];
  onClose?: () => void;
}

const Toast: FC<Props> = ({ title, children, onClose }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <button className={styles.closeButton} type='button' onClick={() => onClose && onClose()}>
          <CrossIcon />
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Toast;
