import { FC } from 'react';

import Body from './Body';
import Sidebar from './Sidebar';

import styles from './page.module.css';

const Page: FC = () => {
  return (
    <main className="container">
      <h1 className={styles.title}>Ваш заказ</h1>
      <div className={styles.wrapper}>
        <Body />
        <Sidebar />
      </div>
    </main>
  );
};

export default Page;
