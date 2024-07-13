'use client';

import { FC, MouseEvent } from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import Image from 'next/image';

import HeartIcon from '@/assets/icons/heart.svg';

import styles from './ProductCard.module.css';

import { IProductCard } from '@/models';
import { formatPrice } from '@/utils/formatPrice';

interface Props extends IProductCard {
  small?: boolean;
  className?: string;
}

const ProductCard: FC<Props> = ({ id, image, name, price, inStock, small, className }) => {
  const favoriteButtonCallback = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Link className={classNames(styles.wrapper, small && styles.small, className)} href={`/products/${id}`}>
      {!inStock && <div className={styles.badge}>нет в наличии</div>}
      <button className={styles.favoriteButton} type='button' onClick={favoriteButtonCallback}>
        <HeartIcon />
      </button>
      <img className={styles.image} src={image} alt='' />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{inStock ? formatPrice(price) : 'нет в наличии'}</div>
    </Link>
  );
};

export default ProductCard;
