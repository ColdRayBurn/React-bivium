'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';

import { cartPut } from '@/redux/slices/cartSlice';
import { putFavorites, removeFavorites } from '@/redux/slices/favoritesSlice';

import ThinHeartIcon from '@icons/thin-heart.svg';

import styles from './Actions.module.css';

interface Props {
  product: {
    id: number;
    name: string;
    color: string;
    size: string;
    price: number;
    image: string;
    amount: number;
    productId: number;
    inStock: boolean;
  };
  selectedSizeId: number | null;
  className?: string;
}

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Actions: FC<Props> = ({ product, selectedSizeId, className }) => {
  const cart = useAppSelector(selector => selector.cart);
  const favorites = useAppSelector(selector => selector.favorites);
  const dispatch = useAppDispatch();

  const isAlreadyInCart = !!cart.products.find(item => item.id === selectedSizeId);
  const isAlreadyInFavorites = favorites.findIndex(item => item.id);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <button
        className={classNames(styles.cartButton, isAlreadyInCart && styles.active)}
        type='button'
        onClick={() => {
          selectedSizeId !== null && !isAlreadyInCart && dispatch(cartPut(product));
        }}
      >
        {isAlreadyInCart ? 'Товар уже в корзине' : 'В корзину'}
      </button>
      <MediaQuery minWidth={768}>
        <div className={styles.divider}></div>
      </MediaQuery>
      <button
        className={classNames(
          styles.heartButton,
          favorites.findIndex(item => item.id === product.id) !== -1 && styles.active
        )}
        type='button'
        onClick={() => {
          dispatch(
            favorites.findIndex(item => item.id === product.id) !== -1
              ? removeFavorites({
                  id: product.id,
                  image: product.image,
                  name: product.name,
                  inStock: product.inStock,
                  price: product.price
                })
              : putFavorites({
                  id: product.id,
                  image: product.image,
                  name: product.name,
                  inStock: product.inStock,
                  price: product.price
                })
          );
        }}
      >
        <MediaQuery minWidth={768}>
          <ThinHeartIcon />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          {favorites.findIndex(item => item.id === product.id) !== -1 ? 'В избранном' : 'В избранное'}
        </MediaQuery>
      </button>
    </div>
  );
};

export default Actions;
