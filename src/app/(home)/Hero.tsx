import { FC } from 'react';
import classNames from 'classnames';
import Button from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

import { IMetaHomepageResponse } from '@/api/models';
import { formatUrl } from '@/utils/formatUrl';

interface Props {
  slides: IMetaHomepageResponse['heroCarousel'];
};

const Hero: FC<Props> = ({ slides }) => {
  return (
    <section className={styles.wrapper} style={{ backgroundImage: `url(${formatUrl(slides[0].slide)})` }}>
      <div className={classNames(styles.container, 'container')}>
        <Button className={styles.button} type='button' variant='default'>Узнать больше</Button>
      </div>
    </section>
  );
};

export default Hero;
