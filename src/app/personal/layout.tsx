import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './personal.module.css';

import Navigation from './Navigation';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className={classNames(styles.container, 'container')}>
      <h1 className={styles.title} data-discount='-15 %'>Ваш профиль</h1>
      <div className={styles.wrapper}>
        <Navigation />
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <DeliveryInformation />
    </main>
  );
};

export default Layout;
