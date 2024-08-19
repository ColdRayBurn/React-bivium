'use client';

import { FC, useEffect, useState } from 'react';

import Button from '@/components/ui/Button/Button';
import PencilIcon from '@icons/pencil.svg';

import api from '@/api';
import { IProduct } from '@/models';

import { useAppDispatch } from '@/redux/hooks';
import { cartFetch } from '@/redux/slices/cartSlice';

import styles from './SizeDropdown.module.css';

interface Props {
  productId: number;
  defaultSelectedId: number;
  defaultSelectedName: string;
  quantity: number;
}

const SizeDropdown: FC<Props> = ({ productId, defaultSelectedId, defaultSelectedName, quantity }) => {
  const dispatch = useAppDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [sizes, setSizes] = useState<{ id: number; name: string; inStock: boolean }[]>([]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  useEffect(() => {
    if (!isEditMode || sizes.length) {
      return;
    }

    api
      .get(`products/${productId}/`)
      .json<IProduct>()
      .then(product => {
        setSizes(product.sizes.map(size => ({ id: size.id, name: size.size, inStock: size.inStock })));
      });
  }, [isEditMode, sizes, productId]);

  const onSubmit = () => {
    setIsEditMode(false);

    if (selectedSize === null) {
      return;
    }

    api
      .post('cart/change-size/', {
        json: {
          previousId: defaultSelectedId,
          newId: selectedSize,
          quantity
        }
      })
      .then(() => {
        dispatch(cartFetch());
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sizeWrapper}>
        <div className={styles.title}>Размер:</div>
        {(!isEditMode || !sizes.length) && (
          <>
            <div className={styles.size}>{defaultSelectedName}</div>
            <button className={styles.editButton} type='button' onClick={() => setIsEditMode(true)}>
              <PencilIcon />
            </button>
          </>
        )}
        {isEditMode && !!sizes.length && (
          <select
            className={styles.select}
            defaultValue={sizes.find(size => size.id === defaultSelectedId)?.id}
            onChange={event => setSelectedSize(Number(event.target.value))}
          >
            {sizes.map(size => (
              <option key={size.id} value={size.id} disabled={!size.inStock}>
                {size.name}
              </option>
            ))}
          </select>
        )}
      </div>
      {isEditMode && !!sizes.length && (
        <Button className={styles.submitButton} variant='negative' icon={false} onClick={onSubmit}>
          Сохранить
        </Button>
      )}
    </div>
  );
};

export default SizeDropdown;
