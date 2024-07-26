'use client';

import { FC, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Filter from './Filter/Filter';
import SortDropdown from './SortDropdown';

import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Button from '@/components/ui/Button/Button';

import styles from './Catalog.module.css';

import { ICatalogResponse } from '@/api/models';
import { formatUrl } from '@/utils/formatUrl';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { addCategory, addColor, addSize, applyCategoryFilter } from '@/redux/slices/filtersSlice';

import useCatalog from './useCatalog';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  initialProducts: ICatalogResponse['products'];
  availableFilters: ICatalogResponse['filters'];
  categoryId: number | null;
}

const Catalog: FC<Props> = ({ initialProducts, availableFilters, categoryId }) => {
  const filters = useAppSelector(selector => selector.filters);
  const dispatch = useAppDispatch();

  const {
    sortType,
    setSortType,
    products,
    catalogState: { limit, offset, total },
    fetchNext
  } = useCatalog(initialProducts);

  useEffect(() => {
    availableFilters.categories[0].childitems.forEach(category => {
      dispatch(
        addCategory({ id: Number(category.id), name: category.name, isApplied: Number(category.id) === categoryId })
      );
    });

    // availableFilters.colors.forEach(color => dispatch(addColor({ code: color.name, hex: 'red', isApplied: false })));

    initialProducts.forEach(product => {
      product.sizes.forEach(size => {
        if (size.inStock) {
          dispatch(addSize({ name: size.size, isApplied: false }));
        }
      });
    });

    const activeCategory = filters.categories.find(category => category.id === categoryId);
    activeCategory !== undefined && dispatch(applyCategoryFilter({ ...activeCategory, state: true }));
  }, [filters, initialProducts, availableFilters, dispatch, categoryId]);

  return (
    <div>
      <div className={styles.header}>
        <MediaQuery minWidth={1281}>
          <div className={styles.headerColumn}>
            <h1 className={styles.title}>Каталог</h1>
            <Filter />
          </div>
          <div className={styles.headerColumn}>
            <div className={styles.productsAmount}>{total} товаров</div>
            <SortDropdown sortType={sortType} setSortType={setSortType} />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1280}>
          <h1 className={styles.title}>Каталог</h1>
          <div className={styles.headerRow}>
            <Filter />
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
          variant='negative'
          type='button'
          icon={false}
          onClick={fetchNext}
          style={{ visibility: offset <= total - limit ? 'visible' : 'hidden' }}
        >
          Показать ещё
        </Button>
        <MediaQuery maxWidth={1280}>
          <div className={styles.productsAmount}>
            {products.length}/{total} товаров
          </div>
        </MediaQuery>
        <div className={styles.footerColumn}>
          <div className={styles.productsAmount}>{total} товаров</div>
          <SortDropdown sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
