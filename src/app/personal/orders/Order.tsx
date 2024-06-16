import { FC } from 'react';
import styles from './Order.module.css';

import ProductCard from '@/components/ui/ProductCard/ProductCard';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number | null;
}

interface Props {
  id: number;
  products: Product[];
}

const Order: FC<Props> = ({ id, products }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Заказ №{id}</div>
      <div className={styles.products}>
        {products.map(product =>
          <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} small />)}
      </div>
    </div>
  );
};

export default Order;
