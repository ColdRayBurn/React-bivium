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
  // const isCartEmpty = Math.floor(Math.random());
  const isCartEmpty = true;

  return (
    <main className="container">
      <Breadcrumbs breadсrumbs={[{ name: 'Продолжить покупки', path: '/catalog' }]} />
      <h1 className={styles.title}>Корзина</h1>
      <div className={classNames(styles.wrapper, isCartEmpty && styles.wrapper_emptyCart)}>
        {isCartEmpty && (
          <>
            <EmptyCart />
            <PopularProducts className={styles.products} />
            <DeliveryInformation className={styles.deliveryInformation} withButton />
          </>
        )}
        {!isCartEmpty && (
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
