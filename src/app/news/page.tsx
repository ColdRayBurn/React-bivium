'use client';

import { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { INewsItemList } from '@/api/models';
import { formatDate } from '@/utils/formatDate';
import { formatUrl } from '@/utils/formatUrl';

import NewsItem from './NewsItem';

import styles from './page.module.css';
import classNames from 'classnames';

import api from '@/api';
import Button from '@/components/ui/Button/Button';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";


interface Props {
    initialData: INewsItemList[];
}

const NewsList: FC<Props> = ({ initialData = [] }) => {
    const [news, setNews] = useState<INewsItemList[]>(initialData);
    const [offset, setOffset] = useState(initialData.length);
    const [limit] = useState(3);
    const [hasMore, setHasMore] = useState(true);

    const showMore = useCallback(() => {
        api.get('news/', {
            searchParams: new URLSearchParams({
                limit: limit.toString(),
                offset: offset.toString()
            })
        }).json<INewsItemList[]>()
            .then(response => {
                if (response && response.length > 0) {
                    setNews(prevNews => [...prevNews, ...response]);
                    setOffset(prevOffset => prevOffset + limit);
                } else {
                    setHasMore(false);
                }
            });
    }, [limit, offset]);

    useEffect(() => {
        if (initialData.length === 0) {
            api.get('news/', {
                searchParams: new URLSearchParams({
                    limit: limit.toString(),
                    offset: '0'
                })
            }).json<INewsItemList[]>()
                .then(response => {
                    if (response && response.length > 0) {
                        setNews(response);
                        setOffset(response.length);
                    } else {
                        setHasMore(false);
                    }
                });
        }
    }, [initialData.length, limit]);

    const newsItems = useMemo(() => {
        return news.map(newsItem => (
            <NewsItem
                key={newsItem.id}
                id={newsItem.id}
                image={formatUrl(newsItem.image)}
                name={newsItem.name}
                date={formatDate(newsItem.date)}
                description={newsItem.description}
            />
        ));
    }, [news]);

    return (
        <main className={classNames(styles.container, 'container')}>
            <Breadcrumbs className={styles.breadcrumbs} breadсrumbs={[{name: 'На главную', path: '/'}]} />
            <div className={styles.header}>
                <h1 className={styles.title}>Новости СМИ</h1>
            </div>
            <div className={styles.content}>
                {newsItems}
            </div>
            {hasMore && (
                <div className={styles.footer}>
                    <Button
                        className={styles.showMoreButton}
                        variant='negative'
                        type='button'
                        onClick={showMore}
                    >
                        Показать ещё
                    </Button>
                </div>
            )}
            <DeliveryInformation className={styles.deliveryInfo} withButton />
        </main>
    );
};

export default NewsList;
