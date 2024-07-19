import { FC } from 'react';
import styles from './Cart.module.css';

import CartItem from './CartItem';
import InformationText from '@/components/ui/InformationText/InformationText';

const Cart: FC = () => {
  return (
    <div className={styles.wrapper}>
      <CartItem />
      <CartItem />
      <div className={styles.informationText}>
        <InformationText text="Продукты, помещённые в корзину не резервируются" />
        <InformationText text="Промокоды не суммируются" />
      </div>
    </div>
  );
};

export default Cart;
