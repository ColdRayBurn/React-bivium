'use client';

import { FC, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

import { formatUrl } from '@/utils/formatUrl';
import styles from './Gallery.module.css';

import ArrowLeftIcon from '@icons/arrow-left.svg';
import ArrowRightIcon from '@icons/arrow-right.svg';
import PlayIcon from '@icons/play.svg';

interface Props {
  images: string[];
  className?: string;
}

const Gallery: FC<Props> = ({ images, className }) => {
  const isTouch = useMediaQuery({ maxWidth: 1919 });
  const swiperRef = useRef<SwiperClass>();
  const navigationButtonPreviousRef = useRef<HTMLButtonElement>(null);
  const navigationButtonNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Swiper
        className={styles.carousel}
        wrapperClass={styles.carouselWrapper}
        onInit={swiper => {
          swiperRef.current = swiper;

          swiper.params.navigation = {
            prevEl: navigationButtonPreviousRef.current!,
            nextEl: navigationButtonNextRef.current!,
            disabledClass: styles.navigationButton_disabled
          };

          swiper.navigation.init();
        }}
        modules={[Navigation, Thumbs]}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={imageIndex} className={styles.carouselSlide}>
            <img className={styles.carouselImage} src={formatUrl(image)} alt='' />
          </SwiperSlide>
        ))}
        <button
          ref={navigationButtonPreviousRef}
          className={classNames(styles.navigationButton, styles.navigationButton_previous)}
          type='button'
        >
          <ArrowLeftIcon />
        </button>
        <button
          ref={navigationButtonNextRef}
          className={classNames(styles.navigationButton, styles.navigationButton_next)}
          type='button'
        >
          <ArrowRightIcon />
        </button>
      </Swiper>
      <Swiper
        className={styles.thumbsCarousel}
        wrapperClass={styles.thumbsCarouselWrapper}
        direction={isTouch ? 'horizontal' : 'vertical'}
        spaceBetween={5}
        slidesPerView={'auto'}
        watchSlidesProgress
        onInit={swiper => {
          swiperRef.current!.thumbs.swiper = swiper;
          swiperRef.current!.thumbs.init();
        }}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={imageIndex} className={styles.thumbsCarouselSlide}>
            <img className={styles.carouselImage} src={formatUrl(image)} alt='' />
          </SwiperSlide>
        ))}
        <button className={styles.slideNextButton} type='button' onClick={() => swiperRef.current?.slideNext()}>
          <PlayIcon />
        </button>
      </Swiper>
    </div>
  );
};

export default Gallery;
