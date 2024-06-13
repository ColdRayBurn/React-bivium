'use client';

import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import styles from './ProductCard.module.css';

import HeartIcon from '@/assets/icons/heart.svg';

interface Props {
  id: number;
  image: string;
  name: string;
  price: number | null;
}

const ProductCard: FC<Props> = ({ id, image, name, price }) => {
  const favoriteButtonCallback = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Link className={styles.wrapper} href={`/catalog/${id}`}>
      {price === null && <div className={styles.badge}>нет в наличии</div>}
      <button className={styles.favoriteButton} type='button' onClick={favoriteButtonCallback}>
        <HeartIcon />
      </button>
      <img className={styles.image} src={image} alt='' />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        {price === null ? 'нет в наличии' : Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price)}
      </div>
    </Link>
  );
};

export default ProductCard;
