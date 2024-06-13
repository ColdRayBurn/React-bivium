'use client';

import { FC, useState } from 'react';
import styles from './Catalog.module.css';

import SortDropdown from './SortDropdown';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Button from '@/components/ui/Button/Button';

const Catalog: FC = () => {
  const [sortType, setSortType] = useState<SortType>('popular');

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerColumn}>
          <h1 className={styles.title}>Экипировка</h1>
          <div>Фильтр</div>
        </div>
        <div className={styles.headerColumn}>
          <div className={styles.productsAmount}>126 товаров</div>
          <SortDropdown sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
      <div className={styles.content}>
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
        <ProductCard id={1} image='https://i.imgur.com/QkKpd0X.png' name='dasdasd' price={3000} />
      </div>
      <div className={styles.footer}>
        <Button className={styles.showMoreButton} variant='negative' type='button' icon={false}>Показать ещё</Button>
        <div className={styles.footerColumn}>
          <div className={styles.productsAmount}>126 товаров</div>
          <SortDropdown sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
