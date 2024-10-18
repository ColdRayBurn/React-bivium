'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import SizeSelector from '../SizeSelector/SizeSelector';
import ColorSelector from '@/components/ui/ColorSelector/ColorSelector';

import { Size } from '../SizeSelector/SizeSelector';

import styles from './Selectors.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  sizes: Size[];
  onSizeSelect?: (id: number) => void;
}

const Selectors: FC<Props> = ({ sizes, onSizeSelect }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selector}>
        <div className={styles.selectorTitle}>Размер</div>
        <div className={styles.selectorBody}>
          <SizeSelector sizes={sizes as [Size, ...Size[]]} onSelect={onSizeSelect} />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.selector}>
        <div className={styles.selectorTitle}>Цвет</div>
        <div className={styles.selectorBody}>
          <ColorSelector colors={['#136FA3', '#FD6727', '#4FAD50']} onSelect={console.log} size='md' />
        </div>
      </div>
      <MediaQuery maxWidth={767}>
        <div className={styles.divider}></div>
      </MediaQuery>
    </div>
  );
};

export default Selectors;
