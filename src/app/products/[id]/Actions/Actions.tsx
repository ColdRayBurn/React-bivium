'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

import ThinHeartIcon from '@icons/thin-heart.svg';

import styles from './Actions.module.css';

interface Props {
  className?: string;
}

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Actions: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <button className={classNames(styles.cartButton, false && styles.active)} type='button'>
        В корзину
      </button>
      <MediaQuery minWidth={768}>
        <div className={styles.divider}></div>
      </MediaQuery>
      <button className={classNames(styles.heartButton, false && styles.active)} type='button'>
        <MediaQuery minWidth={768}>
          <ThinHeartIcon />
        </MediaQuery>
        <MediaQuery maxWidth={767}>В избранное</MediaQuery>
      </button>
    </div>
  );
};

export default Actions;
