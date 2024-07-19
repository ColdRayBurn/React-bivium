import { FC } from 'react';
import styles from './CartItem.module.css';

import CrossIcon from '@icons/cross.svg';
import NumberInput from '@/components/ui/NumberInput/NumberInput';

const CartItem: FC = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.removeButton} type="button">
        <CrossIcon />
      </button>
      <div className={styles.inner}>
        <img className={styles.image} src="https://placehold.co/600x400/EEE/31343C" alt="" />
        <div className={styles.body}>
          <div className={styles.name}>Жилет «Пик»</div>
          <div className={styles.properties}>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Цвет:</div>
              <div className={styles.propertiesItemValue}>Красный</div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Размер:</div>
              <div className={styles.propertiesItemValue}>S (54)</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <NumberInput defaultValue={1} min={1} max={10} />
        <div className={styles.price}>
          {Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(1500)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
