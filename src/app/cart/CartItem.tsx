'use client';

import { FC } from 'react';
import styles from './CartItem.module.css';

import CrossIcon from '@icons/cross.svg';
import NumberInput from '@/components/ui/NumberInput/NumberInput';

import { formatPrice } from '@/utils/formatPrice';

import { useAppDispatch } from '@/redux/hooks';
import { cartPut, cartRemove } from '@/redux/slices/cartSlice';

interface Props {
  id: number;
  image: string;
  name: string;
  color: string;
  size: string;
  price: number;
  amount: number;
}

const CartItem: FC<Props> = ({ id, image, name, color, size, price, amount }) => {
  const dispatch = useAppDispatch();

  const onQuantityChange = (previousValue: number, value: number) => {
    dispatch(previousValue > value ? cartRemove({ id }) : cartPut({ id, image, name, color, size, price, amount }));
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.removeButton} type='button' onClick={() => dispatch(cartRemove({ id, all: true }))}>
        <CrossIcon />
      </button>
      <div className={styles.inner}>
        <img className={styles.image} src={image} alt='' />
        <div className={styles.body}>
          <div className={styles.name}>{name}</div>
          <div className={styles.properties}>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Цвет:</div>
              <div className={styles.propertiesItemValue}>{color}</div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Размер:</div>
              <div className={styles.propertiesItemValue}>{size}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <NumberInput defaultValue={amount} onChangeCallback={onQuantityChange} />
        <div className={styles.price}>{formatPrice(price)}</div>
      </div>
    </div>
  );
};

export default CartItem;
