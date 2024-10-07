'use client';

import { FC, useRef } from 'react';
import parse from 'html-react-parser';
import { useMediaQuery } from 'react-responsive';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import { format as formatDate, fromUnixTime as dateFromUnixTime } from 'date-fns';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ArrowLeftSmIcon from '@icons/arrow-left-sm.svg';
import ArrowRightSmIcon from '@icons/arrow-right-sm.svg';
import ArrowRightMdIcon from '@icons/arrow-right-md.svg';

import { formatUrl } from '@/utils/formatUrl';
import { IMetaHomepageResponse } from '@/api/models';

import styles from './News.module.css';

interface Props {
  news: IMetaHomepageResponse['news'];
  className?: string;
}

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const News: FC<Props> = ({ news, className }) => {
  const isTouch = useMediaQuery({ maxWidth: 1280 });
  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Новости и мероприятия</h2>
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
        slidesPerView={isTouch ? 1 : 2}
        spaceBetween={isTouch ? 0 : 10}
        allowTouchMove={isTouch}
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
        {news.map((newsItem, newsItemIndex) => (
          <SwiperSlide key={newsItemIndex} className={styles.carouselSlide}>
            <Link
              className={styles.newsItem}
              href={`/news/${newsItem.id}`}
              style={{ backgroundImage: `url(${formatUrl(newsItem.image)})` }}
            >
              <div className={styles.newsItemTitle}>
                <div className={styles.newsItemTitleArrow}>
                  <ArrowRightMdIcon />
                </div>
                <div className={styles.newsItemTitleText}>{parse(newsItem.name)}</div>
              </div>
              <div className={styles.newsItemBadges}>
                <div className={styles.newsItemBadgesItem}>{formatDate(dateFromUnixTime(newsItem.date), 'dd/MM')}</div>
                <div className={styles.newsItemBadgesItem} style={{ opacity: newsItem.city === null ? 0 : '' }}>
                  {newsItem.city ?? '0'}
                </div>
              </div>
              <button className={styles.newsItemButton} type='button'>
                Подробнее
              </button>
            </Link>
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

export default News;
