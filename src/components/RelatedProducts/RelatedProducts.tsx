'use client';

import { FC, useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import dynamic from 'next/dynamic';

import styles from './RelatedProducts.module.css';

import ProductCard from '../ui/ProductCard/ProductCard';

import api from '@/api';
import { ICatalogProduct } from '@/models';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  relatedTo: number;
  initialProducts?: ICatalogProduct[];
  className?: string;
}

const RelatedProducts: FC<Props> = ({ className, relatedTo, initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    if (initialProducts !== undefined) {
      return;
    }

    const abortController = abortControllerRef.current;

    api.get(`products/${relatedTo}/?similar`, {
      signal: abortController.signal
    }).json<ICatalogProduct[]>().then(products => setProducts(products));

    return () => abortController.abort('aborted');
  }, [relatedTo, initialProducts]);

  return (
    <section className={className}>
      <h2 className={styles.title}>Похожие товары</h2>
      <div className={styles.content}>
        <MediaQuery minWidth={1281}>
          {!!products && products.map(product =>
            <ProductCard
              key={product.id} id={product.id}
              name={product.name} price={product.inStock ? product.price : null}
              image={product.image} />
          )}
        </MediaQuery>
        <MediaQuery maxWidth={1280}>
          {!!products &&
            <Swiper
              className={styles.carousel}
              wrapperClass={styles.carouselWrapper}
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                enabled: true, type: 'bullets',
                horizontalClass: styles.carouselBullets,
                bulletClass: styles.carouselBulletsItem,
                bulletActiveClass: styles.carouselBulletsItem_active
              }}
              modules={[Pagination]}
            >
              {products.map(product =>
                <SwiperSlide key={product.id} className={styles.carouselSlide}>
                  <ProductCard
                    className={styles.product}
                    id={product.id}
                    name={product.name} price={product.inStock ? product.price : null}
                    image={product.image} />
                </SwiperSlide>
              )}
            </Swiper>
          }
        </MediaQuery>
      </div>
    </section>
  );
};

export default RelatedProducts;
