import { FC } from 'react';
import styles from './RelatedProducts.module.css';

import ProductCard from '../ui/ProductCard/ProductCard';

interface Props {
  className?: string;
}

const RelatedProducts: FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className={styles.title}>Похожие товары</h2>
      <div className={styles.content}>
        <ProductCard id={1} name='Шапка «Баланс»' price={1500} image='https://i.imgur.com/QkKpd0X.png' />
        <ProductCard id={1} name='Шапка «Баланс»' price={null} image='https://i.imgur.com/QkKpd0X.png' />
        <ProductCard id={1} name='Шапка «Баланс»' price={1500} image='https://i.imgur.com/QkKpd0X.png' />
        <ProductCard id={1} name='Шапка «Баланс»' price={1500} image='https://i.imgur.com/QkKpd0X.png' />
      </div>
    </section>
  );
};

export default RelatedProducts;
