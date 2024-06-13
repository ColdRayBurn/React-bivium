import { FC } from 'react';
import classNames from 'classnames';
import Button from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={classNames(styles.container, 'container')}>
        <Button className={styles.button} type='button' variant='default'>Узнать больше</Button>
      </div>
    </section>
  );
};

export default Hero;
