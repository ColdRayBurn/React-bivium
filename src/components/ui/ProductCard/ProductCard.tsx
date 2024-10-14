'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

import ColorSelector from '../ColorSelector/ColorSelector';

import { IProductCard } from '@/models';
import { formatUrl } from '@/utils/formatUrl';
import { formatPrice } from '@/utils/formatPrice';

import styles from './ProductCard.module.css';

interface Props extends IProductCard {
  className?: string;
}

const ProductCard: FC<Props> = ({ id, image, name, price, className }) => {
  const router = useRouter();

  return (
    <div className={classNames(styles.wrapper, className)}>
      <img className={styles.image} src={formatUrl(image)} alt='' onClick={() => router.push(`/products/${id}`)} />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{formatPrice(price)}</div>
      <ColorSelector
        className={styles.colorSelector}
        colors={['#136FA3', '#FD6727', '#4FAD50']}
        onSelect={console.log}
        size='sm'
      />
    </div>
  );
};

export default ProductCard;
