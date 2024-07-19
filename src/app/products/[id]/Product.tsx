'use client';

import { FC, useEffect, useState, useRef } from 'react';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import Carousel from './Carousel';
import Button from '@/components/ui/Button/Button';
import SizeSelector from './SizeSelector';
import InStockStatus from './InStockStatus';

import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import ConfirmDialogPopup from '@/components/popups/ConfirmDialogPopup/ConfirmDialogPopup';

import api from '@/api';
import { IProduct } from '@/models';

import { formatPrice } from '@/utils/formatPrice';
import { formatUrl } from '@/utils/formatUrl';

import HeartIcon from '@icons/heart.svg';
import styles from './Product.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Product: FC<IProduct> = ({ id, images, name, gender, season, sportType, color, sizes, inStock }) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<(typeof sizes)[0]>(sizes[0]);
  const [isModalShown, setIsModalShown] = useState(false);
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    const abortController = abortControllerRef.current;
    api.patch(`products/${id}/view/`, { signal: abortController.signal });
    return () => abortController.abort('aborted');
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <MediaQuery minWidth={1281}>
          <div className={styles.images}>
            {images.map((image, imageIndex) => (
              <img key={imageIndex} className={styles.image} src={formatUrl(image)} alt="" />
            ))}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1280}>
          <Carousel images={images} />
        </MediaQuery>
        <div className={styles.body}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{formatPrice(selectedSize.price)}</div>
          <div className={styles.properties}>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Пол:</div>
              <div className={styles.propertiesItemValue}>{gender}</div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Сезон:</div>
              <div className={styles.propertiesItemValue}>{season}</div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Вид спорта:</div>
              <div className={styles.propertiesItemValue}>{sportType}</div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Цвет:</div>
              <div className={styles.propertiesItemValue}>{color}</div>
            </div>
            <div className={styles.propertiesItem}>
              <div className={styles.propertiesItemName}>Размер:</div>
              <div className={styles.propertiesItemValue}>{sizes.map(size => size.size).join(', ')}</div>
            </div>
          </div>
          <SizeSelector
            sizes={sizes.map(size => ({
              name: size.size,
              value: size.id,
              checked: selectedSize.inStock && selectedSize?.id === size.id,
              disabled: !size.inStock
            }))}
            onChangeCallback={size => setSelectedSize(sizes.find(item => item.id === size.value)!)}
          />
          <div className={styles.buttons}>
            <Button
              className={styles.addToCartButton}
              variant="negative"
              icon={false}
              type="button"
              onClick={() => (inStock ? setIsModalShown(true) : null)}
            >
              {inStock ? 'Добавить в корзину' : 'Сообщить о поступлении'}
            </Button>
            <Button className={styles.favoriteButton} variant="default" icon={false} type="button">
              <HeartIcon />
            </Button>
          </div>
          <InStockStatus className={styles.inStockStatus} value={inStock} />
        </div>
      </div>
      <OverlayingPopup isOpened={isModalShown}>
        <ConfirmDialogPopup
          title="Товар добавлен в корзину"
          submitButtonText="Перейти в корзину"
          submitButtonHandler={() => router.push('/cart')}
          cancelButtonText="Продолжить покупки"
          cancelButtonHandler={() => setIsModalShown(false)}
        >
          <div className={styles.modal}>
            <img className={styles.modalImage} src={formatUrl(images[0])} alt="" />
            <div className={styles.modalBody}>
              <div className={styles.modalBodyTitle}>{name}</div>
              <div className={styles.modalBodyPrice}>{formatPrice(selectedSize.price)}</div>
            </div>
          </div>
        </ConfirmDialogPopup>
      </OverlayingPopup>
    </div>
  );
};

export default Product;
