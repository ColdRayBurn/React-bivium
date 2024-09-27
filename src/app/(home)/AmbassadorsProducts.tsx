'use client';

import { FC, useRef } from 'react';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ArrowLeftSmIcon from '@icons/arrow-left-sm.svg';
import ArrowRightSmIcon from '@icons/arrow-right-sm.svg';

import AmbassadorProduct from '@/components/AmbassadorProduct/AmbassadorProduct';
import styles from './AmbassadorsProducts.module.css';

interface Props {
  className?: string;
}

const AmbassadorsProducts: FC<Props> = ({ className }) => {
  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Выбор наших амбассадоров</h2>
        <div className={styles.headerNavigation}>
          <button ref={previousButtonRef} className={classNames(styles.headerNavigationButton)} type='button'>
            <ArrowLeftSmIcon />
          </button>
          <button ref={nextButtonRef} className={classNames(styles.headerNavigationButton)} type='button'>
            <ArrowRightSmIcon />
          </button>
        </div>
      </div>
      <Swiper
        className={styles.carousel}
        modules={[Navigation]}
        wrapperClass={styles.carouselWrapper}
        slidesPerView={4}
        spaceBetween={50}
        allowTouchMove={false}
        onInit={swiper => {
          swiper.params.navigation = {
            enabled: true,
            prevEl: previousButtonRef.current,
            nextEl: nextButtonRef.current,
            disabledClass: styles.headerNavigationButton_disabled
          };

          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className={styles.carouselSlide}>
          <AmbassadorProduct />
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <AmbassadorProduct />
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <AmbassadorProduct />
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <AmbassadorProduct />
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <AmbassadorProduct />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AmbassadorsProducts;
