import { FC } from 'react';
import styles from './page.module.css';

import Body from './Body';

const Page: FC = () => {
  return (
    <main className='container'>
      <h1 className={styles.title}>Ваш заказ</h1>
      <div className={styles.wrapper}>
        <Body />
      </div>
    </main>
  );
};

export default Page;
