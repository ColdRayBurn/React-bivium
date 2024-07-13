import { FC } from 'react';
import styles from './page.module.css';

import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Empty from './Empty';

const Page: FC = () => {
  return <Empty />;

  return (
    <div className={styles.wrapper}>
      <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='asd' price={200} inStock={true} />
      <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='asd' price={200} inStock={false} />
      <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='asd' price={200} inStock={false} />
      <ProductCard id={1} image='https://placehold.co/600x400/EEE/31343C' name='asd' price={200} inStock={false} />
    </div>
  );
};

export default Page;
