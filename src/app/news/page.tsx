'use client';

import { FC, useEffect, useState } from 'react';
import { INewsItemList } from '@/api/models';
import { formatDate } from '@/utils/formatDate';
import { formatUrl } from '@/utils/formatUrl';

import Link from 'next/link';
import api from '@/api';

import styles from './NewsList.module.css';
import classNames from 'classnames';

const NewsList: FC = () => {
    const [news, setNews] = useState<INewsItemList[]>([]);

    useEffect(() => {
        const fetchNewsItems = async () => {
            try {
                const response = await api.get('news/');
                if (!response.ok) {
                    console.error('Failed to fetch news items', response.statusText);
                    return;
                }
                const newsItems: INewsItemList[] = await response.json();
                setNews(newsItems);
            } catch (error) {
                console.error('Error fetching news items:', error);
            }
        };

        fetchNewsItems();
    }, []);

    return (
        <main className={'container'}>
            <div className={classNames(styles.header)}>
                <h1 className={styles.title}>Новости СМИ</h1>
            </div>
            <div className={styles.content}>
                {(
                    news.map(newsItem => (
                        <div key={newsItem.id} className={styles.contentItem}>
                            <Link href={`/news/${newsItem.id}`}>
                                <img src={formatUrl(newsItem.image)} alt={newsItem.name} />
                                <p>{formatDate(newsItem.date)}</p>
                                <h2>{newsItem.name}</h2>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
};

export default NewsList;
