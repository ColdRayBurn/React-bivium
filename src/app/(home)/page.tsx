import { FC } from 'react';

import Hero from './Hero';
import Catalog from './Catalog';
import Banner from './Banner';
import AmbassadorsProducts from './AmbassadorsProducts';
import News from './News';

import api from '@/api';
import { IMetaHomepageResponse } from '@/api/models';

import styles from './page.module.css';

const Page: FC = async () => {
  const meta = await api.get('meta/homepage/').json<IMetaHomepageResponse>();

  return (
    <main className={styles.wrapper}>
      <Hero hero={meta.hero} />
      <Catalog className={styles.catalog} catalog={meta.catalog} />
      <Banner className={styles.banner} banner={meta.banner} />
      <AmbassadorsProducts className={styles.ambassadorsProducts} ambassadorsProducts={meta.ambassadorsProducts} />
      <News className={styles.news} news={meta.news} />
    </main>
  );
};

export default Page;
