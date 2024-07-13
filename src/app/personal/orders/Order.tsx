import { FC } from 'react';
import styles from './Order.module.css';

import ProductCard from '@/components/ui/ProductCard/ProductCard';
import { IProductCard } from '@/models';

interface Props {
  id: number;
  products: IProductCard[];
}

const Order: FC<Props> = ({ id, products }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Заказ №{id}</div>
      <div className={styles.products}>
        {products.map(product =>
          <ProductCard
            key={product.id} id={product.id}
            image={product.image} name={product.name}
            price={product.price} inStock={product.inStock} small
          />)}
      </div>
    </div>
  );
};

export default Order;
