import { FC } from 'react';
import styles from './Sidebar.module.css';

import Card from './Card';
import CheckCircleIcon from '@icons/check-circle.svg';

const Sidebar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Card title='Содержимое отправления'>
        <div className={styles.products}>
          <div className={styles.product}>
            <img className={styles.productImage} src='https://placehold.co/600x400/EEE/31343C' alt='' />
            <div className={styles.productBody}>
              <div className={styles.productTitle}>Шапка - «Баланс»</div>
              <div className={styles.productProperties}>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Цвет:</div>
                  <div className={styles.productPropertiesItemValue}>Красный</div>
                </div>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Размер:</div>
                  <div className={styles.productPropertiesItemValue}>S (54)</div>
                </div>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Количество:</div>
                  <div className={styles.productPropertiesItemValue}>1</div>
                </div>
              </div>
              <div className={styles.productPrice}>1 500 ₽</div>
            </div>
          </div>
          <div className={styles.product}>
            <img className={styles.productImage} src='https://placehold.co/600x400/EEE/31343C' alt='' />
            <div className={styles.productBody}>
              <div className={styles.productTitle}>Шапка - «Баланс»</div>
              <div className={styles.productProperties}>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Цвет:</div>
                  <div className={styles.productPropertiesItemValue}>Красный</div>
                </div>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Размер:</div>
                  <div className={styles.productPropertiesItemValue}>S (54)</div>
                </div>
                <div className={styles.productPropertiesItem}>
                  <div className={styles.productPropertiesItemName}>Количество:</div>
                  <div className={styles.productPropertiesItemValue}>1</div>
                </div>
              </div>
              <div className={styles.productPrice}>1 500 ₽</div>
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryAmount}>2 товара</div>
          <div className={styles.summaryPrice}>11 300 ₽</div>
        </div>
        <div className={styles.result}>
          <div className={styles.resultText}>Итог:</div>
          <div className={styles.resultPrice}>11 300 ₽</div>
        </div>
      </Card>
      <Card>
        <div className={styles.email}>
          <div className={styles.emailHeader}>
            <CheckCircleIcon />
            E-Mail адрес
          </div>
          <div className={styles.emailText}>donald.draper@sterling-cooper.com</div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
