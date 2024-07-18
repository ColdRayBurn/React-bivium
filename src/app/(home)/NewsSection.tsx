'use client';

import { FC, useState } from 'react';
import { INewsItemList } from '@/api/models';
import { formatDate } from '@/utils/formatDate';
import { formatUrl } from '@/utils/formatUrl';
import { NextArrow, PrevArrow } from '@/components/ui/Arrows/Arrows';

import Link from 'next/link';
import Slider from 'react-slick';

import styles from './NewsSection.module.css';
import classNames from 'classnames';

interface Props {
    initialNews: INewsItemList[];
}

const Page: FC<Props> = ({ initialNews }) => {
    const [news, setNews] = useState<INewsItemList[]>(initialNews);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
            <div className={classNames(styles.header, 'container')}>
                <h1 className={styles.title}>Новости СМИ</h1>
            </div>
            <Slider {...settings} className={styles.slider}>
                {news.map(newsItem => (
                    <div key={newsItem.id} className={styles.contentItem}>
                        <div>
                            <img src={formatUrl(newsItem.image)} alt={newsItem.name} />
                            <p>{formatDate(newsItem.date)}</p>
                            <Link href={`/news/${newsItem.id}`}><h2>{newsItem.name}</h2></Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Page;
