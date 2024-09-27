import { FC } from 'react';

import Hero from './Hero';
import Catalog from './Catalog';
import Banner from './Banner';
import AmbassadorsProducts from './AmbassadorsProducts';
import News from './News';

import api from '@/api';
import { IMetaHomepageResponse, INewsItemListResponse } from '@/api/models';

import styles from './page.module.css';

const Page: FC = async () => {
  const meta = await api.get('meta/homepage/').json<IMetaHomepageResponse>();
  const initialNewsResponse = await api.get('news/').json<INewsItemListResponse>();

  return (
    <main className={styles.wrapper}>
      <Hero />
      <Catalog className={styles.catalog} />
      <Banner className={styles.banner} />
      <AmbassadorsProducts className={styles.ambassadorsProducts} />
      <News className={styles.news} />
    </main>
  );
};

export default Page;
