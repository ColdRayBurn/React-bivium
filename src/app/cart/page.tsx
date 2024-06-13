import { FC } from 'react';
import classNames from 'classnames';

import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import Cart from './Cart';
import Sidebar from './Sidebar';

import EmptyCart from './EmptyCart';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import styles from './page.module.css';

const Page: FC = () => {
  // const isCartEmpty = Math.floor(Math.random());
  const isCartEmpty = true;

  return (
    <main className='container'>
      <BackwardLink text='Продолжить покупки' href='/catalog' />
      <h1 className={styles.title}>Корзина</h1>
      <div className={classNames(styles.wrapper, isCartEmpty && styles.wrapper_emptyCart)}>
        {isCartEmpty && (
          <>
            <EmptyCart />
            <RelatedProducts className={styles.products} />
            <DeliveryInformation className={styles.deliveryInformation} />
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
