'use client';

import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import styles from './personal.module.css';

import Navigation from './Navigation';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import AuthRedirect from './AuthRedirect';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <AuthRedirect />
      <MediaQuery minWidth={1281}>
        <main className={classNames(styles.container, 'container')}>
          <h1 className={styles.title} data-discount="-15 %">
            Ваш профиль
          </h1>
          <div className={styles.wrapper}>
            <Navigation />
            <div className={styles.content}>{children}</div>
          </div>
          <DeliveryInformation className={styles.deliveryInformation} withButton />
        </main>
      </MediaQuery>
      <MediaQuery maxWidth={1280}>
        <main className={classNames(styles.container, 'container')}>{children}</main>
      </MediaQuery>
    </>
  );
};

export default Layout;
