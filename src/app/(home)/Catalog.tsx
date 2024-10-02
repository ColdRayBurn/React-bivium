'use client';

import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { formatUrl } from '@/utils/formatUrl';
import { IMetaHomepageResponse } from '@/api/models';

import styles from './Catalog.module.css';

interface Props {
  catalog: IMetaHomepageResponse['catalog'];
  className?: string;
}

const Catalog: FC<Props> = ({ catalog, className }) => {
  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      {catalog.map((catalogItem, catalogIndex) => (
        <Link
          key={catalogIndex}
          className={styles.card}
          href={catalogItem.url}
          style={{ backgroundImage: `url(${formatUrl(catalogItem.pictureUrl)})` }}
        >
          <div className={styles.card__title}>{catalogItem.title}</div>
          <div className={styles.card__badge}>{catalogItem.badge}</div>
        </Link>
      ))}
    </section>
  );
};

export default Catalog;
