'use client';

import { FC } from 'react';
import classNames from 'classnames';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

import { formatUrl } from '@/utils/formatUrl';
import styles from './Gallery.module.css';

interface Props {
  images: string[];
  className?: string;
}

const Gallery: FC<Props> = ({ images, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Swiper className={styles.carousel} wrapperClass={styles.carouselWrapper}>
        {images.map((image, imageIndex) => (
          <SwiperSlide key={imageIndex} className={styles.carouselSlide}>
            <img className={styles.carouselImage} src={formatUrl(image)} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
