'use client';

import { FC, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import AmbassadorProduct from '@/components/AmbassadorProduct/AmbassadorProduct';

import ArrowLeftSmIcon from '@icons/arrow-left-sm.svg';
import ArrowRightSmIcon from '@icons/arrow-right-sm.svg';

import { IMetaHomepageResponse } from '@/api/models';

import styles from './AmbassadorsProducts.module.css';

interface Props {
  ambassadorsProducts: IMetaHomepageResponse['ambassadorsProducts'];
  className?: string;
}

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const AmbassadorsProducts: FC<Props> = ({ ambassadorsProducts, className }) => {
  const isTablet = useMediaQuery({ maxWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Выбор наших амбассадоров</h2>
        <MediaQuery minWidth={768}>
          <div className={styles.headerNavigation}>
            <button ref={previousButtonRef} className={classNames(styles.headerNavigationButton)} type='button'>
              <ArrowLeftSmIcon />
            </button>
            <button ref={nextButtonRef} className={classNames(styles.headerNavigationButton)} type='button'>
              <ArrowRightSmIcon />
            </button>
          </div>
        </MediaQuery>
      </div>
      <Swiper
        className={styles.carousel}
        modules={[Navigation]}
        wrapperClass={styles.carouselWrapper}
        slidesPerView={(() => {
          if (isTablet) {
            return 'auto';
          }

          if (isMobile) {
            return 1;
          }

          return 4;
        })()}
        spaceBetween={isMobile ? 0 : 50}
        allowTouchMove={isTablet || isMobile}
        onBeforeInit={swiper => {
          swiper.params.navigation = {
            enabled: true,
            prevEl: previousButtonRef.current,
            nextEl: nextButtonRef.current,
            disabledClass: styles.navigationButton_disabled
          };

          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {ambassadorsProducts.map((product, productIndex) => (
          <SwiperSlide key={productIndex} className={styles.carouselSlide}>
            <AmbassadorProduct product={product} />
          </SwiperSlide>
        ))}
        <MediaQuery maxWidth={767}>
          <div className={styles.carouselNavigation}>
            <button ref={previousButtonRef} className={classNames(styles.carouselNavigationButton)} type='button'>
              <ArrowLeftSmIcon />
            </button>
            <button ref={nextButtonRef} className={classNames(styles.carouselNavigationButton)} type='button'>
              <ArrowRightSmIcon />
            </button>
          </div>
        </MediaQuery>
      </Swiper>
    </section>
  );
};

export default AmbassadorsProducts;
