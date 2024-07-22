'use client';

import { FC, useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { INewsItemList } from '@/api/models';
import { formatDate } from '@/utils/formatDate';
import { formatUrl } from '@/utils/formatUrl';

import NewsItem from './NewsItem';

import styles from './page.module.css';
import classNames from 'classnames';

import api from '@/api';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';

interface Props {
  initialData: INewsItemList[];
}

const NewsList: FC<Props> = ({ initialData = [] }) => {
  const [news, setNews] = useState<INewsItemList[]>(initialData);
  const [offset, setOffset] = useState(initialData.length);
  const [limit] = useState(3);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const showMore = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);
    api
      .get('news/', {
        searchParams: new URLSearchParams({
          limit: limit.toString(),
          offset: offset.toString()
        })
      })
      .json<INewsItemList[]>()
      .then(response => {
        if (response && response.length > 0) {
          setNews(prevNews => [...prevNews, ...response]);
          setOffset(prevOffset => prevOffset + limit);
        } else {
          setHasMore(false);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [limit, offset, isLoading]);

  useEffect(() => {
    if (initialData.length === 0) {
      setIsLoading(true);
      api
        .get('news/', {
          searchParams: new URLSearchParams({
            limit: limit.toString(),
            offset: '0'
          })
        })
        .json<INewsItemList[]>()
        .then(response => {
          if (response && response.length > 0) {
            setNews(response);
            setOffset(response.length);
          } else {
            setHasMore(false);
          }
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [initialData.length, limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          showMore();
        }
      },
      {
        threshold: 1.0
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, [showMore, hasMore, isLoading]);

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
      <Breadcrumbs
        className={styles.breadcrumbs}
        breadсrumbs={[
          { name: 'На главную', path: '/' },
          { name: 'О компании', path: '/about-company' }
        ]}
        withArrow
      />
      <div className={styles.header}>
        <h1 className={styles.title}>Новости СМИ</h1>
      </div>
      <div className={styles.content}>{newsItems}</div>
      {hasMore && <div className={styles.footer} ref={buttonRef}></div>}
      <DeliveryInformation className={styles.deliveryInfo} withButton />
    </main>
  );
};

export default NewsList;
