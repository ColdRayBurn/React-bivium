'use client';

import { FC, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import ProductCard from '../ui/ProductCard/ProductCard';
import { IProductCard } from '@/models';

import { formatUrl } from '@/utils/formatUrl';

import styles from './ProductsList.module.css';

interface Props {
  title?: string;
  products: IProductCard[];
  className?: string;
}

const ProductsList: FC<Props> = ({ title, products, className }) => {
  const paginationContainerRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({ maxWidth: 1919 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={classNames(styles.wrapper, className)}>
      <div className={classNames(styles.header, 'container')}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div ref={paginationContainerRef} className={styles.pagination}>
          <div className={classNames(styles.paginationItem, styles.active)}></div>
        </div>
      </div>
      <div className={styles.content}>
        <Swiper
          className={styles.carousel}
          wrapperClass={styles.carouselWrapper}
          pagination={{
            el: paginationContainerRef.current,
            bulletClass: styles.paginationItem,
            bulletActiveClass: styles.active,
            clickable: true
          }}
          modules={[Pagination]}
          slidesPerView={(() => {
            if (isMobile) {
              return 1;
            }

            if (isTablet) {
              return 'auto';
            }

            return 3;
          })()}
          spaceBetween={(() => {
            if (isMobile) {
              return undefined;
            }

            if (isTablet) {
              return 100;
            }

            return undefined;
          })()}
        >
          {products.map(product => (
            <SwiperSlide key={product.id} className={styles.carouselSlide}>
              <ProductCard
                className={styles.product}
                id={product.id}
                name={product.name}
                price={product.price}
                image={formatUrl(product.image)}
                inStock={product.inStock}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsList;
