import { FC } from 'react';
import classNames from 'classnames';
import styles from './Partners.module.css';

const Partners: FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.subtitle}>Внимание нашим будущим</div>
        <h1 className={styles.title}>Партнёрам</h1>
      </div>
    </section>
  );
};

export default Partners;
