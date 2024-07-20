import { FC } from 'react';
import classNames from 'classnames';

import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import Cart from './Cart';
import Sidebar from './Sidebar';

import EmptyCart from './EmptyCart';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import styles from './page.module.css';

const Page: FC = () => {
  const isEmpty = Math.random() < 0.5;

  return (
    <main className={classNames(styles.container, 'container')}>
      <Breadcrumbs breadсrumbs={[{ name: 'Продолжить покупки', path: '/catalog' }]} />
      <h1 className={styles.title}>Корзина</h1>
      <div className={classNames(styles.wrapper, isEmpty && styles.wrapper_emptyCart)}>
        {isEmpty && (
          <>
            <EmptyCart />
            <PopularProducts className={styles.products} />
            <DeliveryInformation className={styles.deliveryInformation} withButton />
          </>
        )}
        {!isEmpty && (
          <>
            <Cart />
            <Sidebar />
          </>
        )}
      </div>
    </main>
  );
};

export default Page;
