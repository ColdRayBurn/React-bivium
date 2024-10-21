'use client';

import { FC } from 'react';
import parse from 'html-react-parser';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        poster={isMobile ? formatUrl(hero.pictureMobile) : formatUrl(hero.picture)}
        autoPlay
        loop
        muted
      >
        <source src={isMobile ? formatUrl(hero.videoMobile) : formatUrl(hero.video)} type='video/mp4' />
      </video>
      <div className={styles.text}>{parse(hero.text)}</div>
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
