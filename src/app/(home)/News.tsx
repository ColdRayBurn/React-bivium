'use client';

import { FC, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ArrowLeftSmIcon from '@icons/arrow-left-sm.svg';
import ArrowRightSmIcon from '@icons/arrow-right-sm.svg';
import ArrowRightMdIcon from '@icons/arrow-right-md.svg';

import styles from './News.module.css';

interface Props {
  className?: string;
}

const News: FC<Props> = ({ className }) => {
  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Новости и мероприятия</h2>
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
        slidesPerView={2}
        spaceBetween={10}
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
          <Link
            className={styles.newsItem}
            href='/'
            style={{ backgroundImage: 'url(https://i.imgur.com/5BsO9Yq.png)' }}
          >
            <div className={styles.newsItemTitle}>
              <div className={styles.newsItemTitleArrow}>
                <ArrowRightMdIcon />
              </div>
              <div className={styles.newsItemTitleText}>
                Ищите наш <b>BIVIUM POINT</b>, вас ждут последние новинки и особые активности
              </div>
            </div>
            <div className={styles.newsItemBadges}>
              <div className={styles.newsItemBadgesItem}>11/08</div>
              <div className={styles.newsItemBadgesItem}>г. Екатеринбург</div>
            </div>
            <button className={styles.newsItemButton} type='button'>
              Подробнее
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <Link
            className={styles.newsItem}
            href='/'
            style={{ backgroundImage: 'url(https://i.imgur.com/Sob3R7N.png)' }}
          >
            <div className={styles.newsItemTitle}>
              <div className={styles.newsItemTitleArrow}>
                <ArrowRightMdIcon />
              </div>
              <div className={styles.newsItemTitleText}>
                Пробежка-лекция с амбассадорами Марина Кретова подводка к марафону
              </div>
            </div>
            <div className={styles.newsItemBadges}>
              <div className={styles.newsItemBadgesItem}>14/08</div>
              <div className={styles.newsItemBadgesItem}>Г. МОСКВА//БАЗА УРАЛХИМ</div>
            </div>
            <button className={styles.newsItemButton} type='button'>
              Подробнее
            </button>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <Link
            className={styles.newsItem}
            href='/'
            style={{ backgroundImage: 'url(https://i.imgur.com/5BsO9Yq.png)' }}
          >
            <div className={styles.newsItemTitle}>
              <div className={styles.newsItemTitleArrow}>
                <ArrowRightMdIcon />
              </div>
              <div className={styles.newsItemTitleText}>
                Ищите наш <b>BIVIUM POINT</b>, вас ждут последние новинки и особые активности
              </div>
            </div>
            <div className={styles.newsItemBadges}>
              <div className={styles.newsItemBadgesItem}>11/08</div>
              <div className={styles.newsItemBadgesItem}>г. Екатеринбург</div>
            </div>
            <button className={styles.newsItemButton} type='button'>
              Подробнее
            </button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default News;
