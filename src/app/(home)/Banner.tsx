'use client';

import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';
import parse from 'html-react-parser';
import classNames from 'classnames';

import ArrowRightMdIcon from '@icons/arrow-right-md.svg';

import { formatUrl } from '@/utils/formatUrl';
import { IMetaHomepageResponse } from '@/api/models';

import styles from './Banner.module.css';

interface Props {
  banner: IMetaHomepageResponse['banner'];
  className?: string;
}

const Banner: FC<Props> = ({ banner, className }) => {
  const router = useRouter();
  const isTouch = useMediaQuery({ maxWidth: 1919 });

  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <h2 className={styles.title}>Люди BIVIUM</h2>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${isTouch ? formatUrl(banner.mobilePictureUrl) : formatUrl(banner.pictureUrl)})`
        }}
      >
        <div className={styles.imageTitle}>
          <div className={styles.imageTitleBody}>
            <div className={styles.imageTitleBodyText}>{parse(banner.title)}</div>
            <div className={styles.imageTitleBodyArrows}>
              <ArrowRightMdIcon />
              <ArrowRightMdIcon />
              <ArrowRightMdIcon />
            </div>
          </div>
          <button className={styles.imageTitleButton} type='button' onClick={() => router.push(banner.button.url)}>
            {banner.button.text}
          </button>
        </div>
        <div className={styles.imageDescription}>{banner.description}</div>
      </div>
    </section>
  );
};

export default Banner;
