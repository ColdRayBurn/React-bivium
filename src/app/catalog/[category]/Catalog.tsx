'use client';

import { FC, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

import SortDropdown from './SortDropdown';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Button from '@/components/ui/Button/Button';

import styles from './Catalog.module.css';

import api from '@/api';
import { ICatalogResponse } from '@/api/models';

import { formatUrl } from '@/utils/formatUrl';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  data: ICatalogResponse;
  categoryId: number;
}

const Catalog: FC<Props> = ({ data, categoryId }) => {
  const [sortType, setSortType] = useState<SortType>('popular');
  const [products, setProducts] = useState(data.products ?? []);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);

  const showMore = useCallback(() => {
    api
      .get('catalog/', {
        searchParams: new URLSearchParams({
          limit: limit.toString(),
          offset: (offset + limit).toString(),
          category: categoryId.toString()
        })
      })
      .json<ICatalogResponse>()
      .then(response => {
        setProducts(products => products.concat(response.products ?? []));
        setOffset(offset => offset + limit);
      });
  }, [limit, categoryId, offset]);

  return (
    <div>
      <div className={styles.header}>
        <MediaQuery minWidth={1281}>
          <div className={styles.headerColumn}>
            <h1 className={styles.title}>Экипировка</h1>
            <div>Фильтр</div>
          </div>
          <div className={styles.headerColumn}>
            <div className={styles.productsAmount}>{data.total} товаров</div>
            <SortDropdown sortType={sortType} setSortType={setSortType} />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1280}>
          <h1 className={styles.title}>Экипировка</h1>
          <div className={styles.headerRow}>
            <div>Фильтр</div>
            <SortDropdown sortType={sortType} setSortType={setSortType} />
          </div>
        </MediaQuery>
      </div>
      <div className={styles.content}>
        {products.map(product => (
          <ProductCard
            className={styles.contentItem}
            key={product.id}
            id={product.id}
            image={formatUrl(product.image)}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <Button
          className={styles.showMoreButton}
          variant="negative"
          type="button"
          icon={false}
          onClick={showMore}
          style={{ visibility: offset <= data.total - limit ? 'visible' : 'hidden' }}
        >
          Показать ещё
        </Button>
        <div className={styles.footerColumn}>
          <div className={styles.productsAmount}>{data.total} товаров</div>
          <SortDropdown sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
