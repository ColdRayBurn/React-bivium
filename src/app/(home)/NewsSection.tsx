'use client';

import { FC, useState } from 'react';
import { INewsItemList } from '@/api/models';
import { formatDate } from '@/utils/formatDate';
import { formatUrl } from '@/utils/formatUrl';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './NewsSection.module.css';
import classNames from 'classnames';

interface Props {
    initialNews: INewsItemList[];
}

const Page: FC<Props> = ({ initialNews }) => {
    const [news, setNews] = useState<INewsItemList[]>(initialNews);

    return (
        <section>
            <div className={classNames(styles.header, 'container')}>
                <h1 className={styles.title}>Новости СМИ</h1>
            </div>
            <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    2560: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                className={styles.slider}
            >
                {news.map(newsItem => (
                    <SwiperSlide key={newsItem.id} className={styles.contentItem}>
                        <div>
                            <img src={formatUrl(newsItem.image)} alt={newsItem.name} />
                            <p>{formatDate(newsItem.date)}</p>
                            <Link href={`/news/${newsItem.id}`}><h2>{newsItem.name}</h2></Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Page;
