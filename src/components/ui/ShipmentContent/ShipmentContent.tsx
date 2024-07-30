import { FC } from 'react';
import Card from '../Card/Card';
import styles from './ShipmentContent.module.css';

import { formatUrl } from '@/utils/formatUrl';
import { formatPrice } from '@/utils/formatPrice';

interface IProduct {
  image: string;
  name: string;
  color: string;
  size: string;
  amount: number;
  price: number;
}

interface Props {
  products: IProduct[];
}

const ShipmentContent: FC<Props> = ({ products }) => {
  const discount = 0;

  const productsPrice = products
    .map(product => product.price * product.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  return (
    <Card title='Содержимое отправления'>
      <div className={styles.products}>
        {products.map((product, productIndex) => (
          <div key={productIndex} className={styles.product}>
            <img className={styles.productImage} src={formatUrl(product.image)} alt='' />
            <div className={styles.productBody}>
              <div className={styles.productTitle}>{product.name}</div>
              <div className={styles.productProperties}>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Цвет:</div>
                  <div className={styles.productPropertiesItemValue}>{product.color}</div>
                </div>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Размер:</div>
                  <div className={styles.productPropertiesItemValue}>{product.size}</div>
                </div>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Количество:</div>
                  <div className={styles.productPropertiesItemValue}>{product.amount}</div>
                </div>
              </div>
              <div className={styles.productPrice}>{formatPrice(product.price * product.amount)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <div className={styles.summaryText}>{products.length} товара</div>
          <div className={styles.summaryPrice}>{formatPrice(productsPrice)}</div>
        </div>
        {!!discount && (
          <div className={styles.summaryRow}>
            <div className={styles.summaryText}>Скидка -{discount}%</div>
            <div className={styles.summaryPrice}>-{formatPrice((productsPrice / 100) * discount)}</div>
          </div>
        )}
      </div>
      <div className={styles.result}>
        <div className={styles.resultText}>Итог:</div>
        <div className={styles.resultPrice}>{formatPrice(productsPrice - (productsPrice / 100) * (discount ?? 0))}</div>
      </div>
    </Card>
  );
};

export default ShipmentContent;
