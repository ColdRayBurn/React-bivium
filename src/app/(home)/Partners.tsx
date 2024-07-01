import { FC } from 'react';
import classNames from 'classnames';
import styles from './Partners.module.css';

import { IMetaHomepageResponse } from '@/api/models';
import { formatUrl } from '@/utils/formatUrl';

type Props = IMetaHomepageResponse['banner'];

const Partners: FC<Props> = ({ name, picture, pictureMobile }) => {
  return (
    <section className={styles.wrapper} style={{ backgroundImage: `url(${formatUrl(picture)})` }}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.subtitle}>Внимание нашим будущим</div>
        <h1 className={styles.title}>{name}</h1>
      </div>
    </section>
  );
};

export default Partners;
