'use client';

import { FC } from 'react';
import classNames from 'classnames';
import styles from './Product.module.css';

import Button from '@/components/ui/Button/Button';
import HeartIcon from '@/assets/icons/heart.svg';
import SizeSelector from './SizeSelector';

const Product: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <div className={styles.images}>
          <img className={styles.image} src='https://i.imgur.com/QkKpd0X.png' alt='' />
          <img className={styles.image} src='https://i.imgur.com/zefk8v4.png' alt='' />
          <img className={styles.image} src='https://i.imgur.com/0PIE3OZ.png' alt='' />
        </div>
        <div className={styles.body}>
          <div className={styles.name}>Шапка - «Баланс»</div>
          <div className={styles.price}>1 500 ₽</div>
          <div className={styles.properties}>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>
                Пол:
              </div>
              <div className={styles.propertiesItemValue}>
                Унисекс
              </div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>
                Сезон:
              </div>
              <div className={styles.propertiesItemValue}>
                Зима
              </div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>
                Вид спорта:
              </div>
              <div className={styles.propertiesItemValue}>
                Лыжи, бег
              </div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>
                Цвет:
              </div>
              <div className={styles.propertiesItemValue}>
                Красный
              </div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>
                Размер:
              </div>
              <div className={styles.propertiesItemValue}>
                S (54), M (56)
              </div>
            </div>
          </div>
          <SizeSelector sizes={[{ name: 'S', value: 'S', checked: true }, { name: 'M', value: 'M' }]} onChangeCallback={console.log} />
          <div className={styles.buttons}>
            <Button variant='negative' icon={false} type='button'>Добавить в корзину</Button>
            <Button className={styles.favoriteButton} variant='default' icon={false} type='button'>
              <HeartIcon />
            </Button>
          </div>
          <div className={classNames(styles.availability, styles.availability_inStock)}>
            В наличии
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
