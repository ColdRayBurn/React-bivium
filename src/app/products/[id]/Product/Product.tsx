'use client';

import { FC, useState } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import classNames from 'classnames';

import Selectors from '../Selectors/Selectors';
import Actions from '../Actions/Actions';
import AmbassadorComment from '../AmbassadorComment/AmbassadorComment';
import Accordions from '../Accordions/Accordions';

import { IProduct } from '@/models';

import styles from './Product.module.css';

interface Props {
  product: IProduct;
  className?: string;
}

const Product: FC<Props> = ({ product, className }) => {
  const [selectedSizeId, setSelectedSizeId] = useState<number | null>(
    product.sizes.find(size => size.inStock)?.id ?? null
  );

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Selectors
        sizes={product.sizes.map(size => ({
          id: size.id,
          name: size.size,
          isDefaultSelected: size.id == product.sizes.find(size => size.inStock)?.id,
          isDisabled: !size.inStock
        }))}
      />
      <div className={styles.price}>
        {selectedSizeId !== null
          ? Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(
              product.sizes.find(size => size.id === selectedSizeId)!.price
            )
          : 'Нет в наличии'}{' '}
        {selectedSizeId !== null && <span>₽</span>}
      </div>
      <Actions
        className={styles.actions}
        product={{
          amount: 1,
          inStock: product.inStock,
          color: 'Красный',
          id: selectedSizeId || 0,
          image: product.imagePreview,
          name: product.name,
          price: product.sizes.find(size => size.id === selectedSizeId)!.price ?? 0,
          productId: product.id,
          size: product.sizes.find(size => size.id === selectedSizeId)!.size
        }}
        selectedSizeId={selectedSizeId}
      />
      <div className={styles.bottom}>
        <div className={styles.bottomColumn}>
          <div className={styles.deliveryInfo}>Бесплатная доставка от 5 000 ₽</div>
          <div className={styles.description}>{parse(product.description)}</div>
          {product.ambassador && (
            <AmbassadorComment
              className={styles.ambassadorComment}
              ambassador={{ comment: product.ambassador.comment, imageUrl: product.ambassador.image }}
              product={{ id: product.id, imageUrl: product.imagePreview, name: product.name }}
            />
          )}
        </div>
        <div className={styles.bottomColumn}>
          <Accordions className={styles.accordions} specifications={product.specifications} sizesTableImage='' />
          <Link className={styles.contactsLink} href='/contacts'>
            Где купить?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
