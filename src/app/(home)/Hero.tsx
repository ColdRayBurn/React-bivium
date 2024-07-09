'use client';

import { FC } from 'react';
import classNames from 'classnames';

import { Swiper as SwiperInstance } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/ui/Button/Button';

import styles from './Hero.module.css';

import { IMetaHomepageResponse } from '@/api/models';
import { formatUrl } from '@/utils/formatUrl';

interface Props {
  slides: IMetaHomepageResponse['heroCarousel'];
};

const Hero: FC<Props> = ({ slides }) => {
  return (
    <section className={styles.wrapper}>
      <Swiper
        className={styles.carousel}
        wrapperClass={styles.carouselWrapper}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, slideIndex) =>
          <SwiperSlide
            key={slideIndex} className={classNames(styles.carouselSlide)}
            style={{
              '--picture': `url(${formatUrl(slide.slide)})`,
              '--picture-mobile': `url(${formatUrl(slide.slidesMobile ? slide.slidesMobile : slide.slide)})`
            }}
          >
            <div className='container'>
              <Button className={styles.button} type='button' variant='negative'>Узнать больше</Button>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

SwiperInstance.use([Autoplay]);
export default Hero;
