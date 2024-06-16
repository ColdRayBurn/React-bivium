import { FC } from 'react';
import styles from './page.module.css';

import Order from './Order';

const Page: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.amount}>
        <div className={styles.amountText}>Всего заказов:</div>
        <div className={styles.amountValue}>1</div>
      </div>
      <div className={styles.orders}>
        <Order id={1} products={[{ id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: 123123 }, { id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: 123123 }, { id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: 123123 }, { id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: null }]} />
        <Order id={2} products={[{ id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: 123123 }, { id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: null }]} />
        <Order id={3} products={[{ id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: 123123 }, { id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: null }]} />
        <Order id={4} products={[{ id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: 123123 }, { id: 1, image: 'https://placehold.co/600x400/EEE/31343C', name: 'test', price: null }]} />
      </div>
    </div>
  );
};

export default Page;
