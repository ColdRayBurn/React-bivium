'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

import Empty from './Empty';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import ProductsList from '@/components/ProductsList/ProductsList';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Page: FC = () => {
  const isEmpty = Math.random() < 0.5;

  return (
    <div className={styles.wrapper}>
      <MediaQuery maxWidth={1280}>
        <h1 className={styles.title}>Избранное (4)</h1>
      </MediaQuery>
      {isEmpty ? (
        <Empty />
      ) : (
        <>
          <MediaQuery minWidth={1281}>
            <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='asd' price={200} inStock={true} />
            <ProductCard
              id={1}
              image='https://placehold.co/600x400/EEE/31343C'
              name='asd'
              price={200}
              inStock={false}
            />
            <ProductCard
              id={1}
              image='https://placehold.co/600x400/EEE/31343C'
              name='asd'
              price={200}
              inStock={false}
            />
            <ProductCard
              id={1}
              image='https://placehold.co/600x400/EEE/31343C'
              name='asd'
              price={200}
              inStock={false}
            />
          </MediaQuery>
          <MediaQuery maxWidth={1280}>
            <ProductsList
              className={styles.productsList}
              products={[
                { id: 1, name: 'asd', image: 'https://placehold.co/600x400/EEE/31343C', price: 200, inStock: true },
                { id: 1, name: 'asd', image: 'https://placehold.co/600x400/EEE/31343C', price: 200, inStock: true },
                { id: 1, name: 'asd', image: 'https://placehold.co/600x400/EEE/31343C', price: 200, inStock: true },
                { id: 1, name: 'asd', image: 'https://placehold.co/600x400/EEE/31343C', price: 200, inStock: true }
              ]}
            />
          </MediaQuery>
        </>
      )}
    </div>
  );
};

export default Page;
