import { FC } from 'react';
import classNames from 'classnames';
import styles from './Banner.module.css';

import ArrowRightMdIcon from '@icons/arrow-right-md.svg';

interface Props {
  className?: string;
}

const Banner: FC<Props> = ({ className }) => {
  return (
    <section className={classNames(className, styles.wrapper, 'container')}>
      <h2 className={styles.title}>Люди BIVIUM</h2>
      <div className={styles.image} style={{ backgroundImage: 'url(https://i.imgur.com/Li3wt31.png)' }}>
        <div className={styles.imageTitle}>
          <div className={styles.imageTitleBody}>
            <div className={styles.imageTitleBodyText}>
              Наша
              <br />
              Команда
              <br />
              Амбассадоров
            </div>
            <div className={styles.imageTitleBodyArrows}>
              <ArrowRightMdIcon />
              <ArrowRightMdIcon />
              <ArrowRightMdIcon />
            </div>
          </div>
          <button className={styles.imageTitleButton} type='button'>
            Подробнее
          </button>
        </div>
        <div className={styles.imageDescription}>
          Команда наших спортсменов — это наши единомышленники и вдохновители. Мы создаём свои продукты в сотворчестве с
          лучшими атлетами...
        </div>
      </div>
    </section>
  );
};

export default Banner;
