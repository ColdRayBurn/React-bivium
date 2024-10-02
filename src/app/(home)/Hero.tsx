'use client';

import { FC } from 'react';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import LogotypeIcon from '@icons/logotype.svg';
import BiviumIcon from '@icons/header-logo.svg';

import { formatUrl } from '@/utils/formatUrl';
import { IMetaHomepageResponse } from '@/api/models';

import styles from './Hero.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  hero: IMetaHomepageResponse['hero'];
}

const Hero: FC<Props> = ({ hero }) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${formatUrl(hero.picture)})` }}>
      <div className={styles.text}>
        ПАША ОПЯТЬ НЕВНИМАТЕЛЬНО
        <br />
        СМОТРИТ МОИ ЭНДПОИНТЫ
        <br />
        ЗАЕБАЛ УЖЕ
      </div>
      <div className={styles.logotype}>
        <MediaQuery minWidth={768}>
          <LogotypeIcon className={styles.logotype__icon} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <BiviumIcon className={styles.logotype__icon} />
        </MediaQuery>
        <button className={styles.logotype__button} type='button' onClick={() => router.push(hero.button.url)}>
          {hero.button.text}
        </button>
      </div>
    </div>
  );
};

export default Hero;
