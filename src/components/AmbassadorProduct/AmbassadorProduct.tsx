import { FC } from 'react';
import classNames from 'classnames';

import { formatPrice } from '@/utils/formatPrice';

import ColorPicker from './ColorPicker/ColorPicker';
import CommentIcon from '@icons/comment.svg';

import styles from './AmbassadorProduct.module.css';

interface Props {
  className?: string;
}

const AmbassadorProduct: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <div className={styles.ambassador}>
        <img className={styles.ambassadorImage} src='https://i.imgur.com/njNH250.png' alt='' />
        <div className={styles.ambassadorBody}>
          <div className={styles.ambassadorName}>
            <div className={styles.ambassadorNameText}>Aлексей Реунков</div>
            <div className={styles.ambassadorNameIcon}>
              <CommentIcon />
            </div>
          </div>
          <button className={styles.ambassadorButton} type='button'>
            Читать комментарий
          </button>
        </div>
      </div>
      <img className={styles.productImage} src='https://i.imgur.com/nmSnRTh.png' alt='' />
      <div className={styles.productName}>Лонгслив «Лайт»</div>
      <div className={styles.productPrice}>{formatPrice(5600)}</div>
      <ColorPicker className={styles.colorpicker} colors={['#136FA3', '#FD6727', '#4FAD50']} onSelect={console.log} />
    </div>
  );
};

export default AmbassadorProduct;
