import { FC } from 'react';
import dynamic from 'next/dynamic';

import Hero from './Hero/Hero';
import Catalog from './Catalog/Catalog';
import Banner from './Banner/Banner';
const AmbassadorsProducts = dynamic(() => import('./AmbassadorsProducts/AmbassadorsProducts'), { ssr: false });
import News from './News/News';

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
