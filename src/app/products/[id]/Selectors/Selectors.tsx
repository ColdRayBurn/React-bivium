'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import SizeSelector from '../SizeSelector/SizeSelector';
import ColorSelector from '@/components/ui/ColorSelector/ColorSelector';

import styles from './Selectors.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Selectors: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selector}>
        <div className={styles.selectorTitle}>Размер</div>
        <div className={styles.selectorBody}>
          <SizeSelector
            sizes={[
              { id: 1, name: 'XS' },
              { id: 2, name: 'S' },
              { id: 3, name: 'M', isDisabled: true },
              { id: 4, name: 'L', isDefaultSelected: true },
              { id: 5, name: 'XL' }
            ]}
            onSelect={console.log}
          />
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
