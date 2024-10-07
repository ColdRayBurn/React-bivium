'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { formatUrl } from '@/utils/formatUrl';
import { formatPrice } from '@/utils/formatPrice';

import ColorPicker from './ColorPicker/ColorPicker';
import AmbassadorPopup from '../popups/AmbassadorPopup/AmbassadorPopup';

import CommentIcon from '@icons/comment.svg';

import styles from './AmbassadorProduct.module.css';

interface Props {
  product: {
    ambassador: {
      name: string;
      comment: string;
      picture: string;
    };
    product: {
      id: number;
      name: string;
      price: number;
      images: string[];
    };
  };
  className?: string;
}

const AmbassadorProduct: FC<Props> = ({ product: { ambassador, product }, className }) => {
  const [isAmbassadorPopupShown, setIsAmbassadorPopupShown] = useState(false);

  return (
    <>
      <Link className={classNames(className, styles.wrapper)} href={`/products/${product.id}`}>
        <div className={styles.ambassador}>
          <img className={styles.ambassadorImage} src={formatUrl(ambassador.picture)} alt='' />
          <div className={styles.ambassadorBody}>
            <div className={styles.ambassadorName}>
              <div className={styles.ambassadorNameText}>
                {ambassador.name.split(' ').map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {itemIndex === 0 ? (
                      <>
                        {item} <br />
                      </>
                    ) : (
                      item
                    )}
                  </span>
                ))}
              </div>
              <div className={styles.ambassadorNameIcon}>
                <CommentIcon />
              </div>
            </div>
            <button className={styles.ambassadorButton} type='button' onClick={() => setIsAmbassadorPopupShown(true)}>
              Читать комментарий
            </button>
          </div>
        </div>
        <img className={styles.productImage} src={formatUrl(product.images[0])} alt='' />
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}>{formatPrice(product.price)}</div>
        <ColorPicker className={styles.colorpicker} colors={['#136FA3', '#FD6727', '#4FAD50']} onSelect={console.log} />
      </Link>
      <AmbassadorPopup
        ambassador={{ comment: ambassador.comment, imageUrl: ambassador.picture }}
        product={{ id: product.id, imageUrl: product.images[0], name: product.name }}
        isOpen={isAmbassadorPopupShown}
        onClose={() => setIsAmbassadorPopupShown(false)}
      />
    </>
  );
};

export default AmbassadorProduct;
