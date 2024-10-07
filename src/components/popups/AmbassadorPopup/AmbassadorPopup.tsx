import { FC } from 'react';
import parse from 'html-react-parser';
import styles from './AmbassadorPopup.module.css';

import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';

import CrossIcon from '@icons/cross.svg';
import ArrowLeft from '@icons/arrow-left.svg';

import { formatUrl } from '@/utils/formatUrl';

interface Props {
  ambassador: {
    imageUrl: string;
    comment: string;
  };
  product: {
    id: number;
    imageUrl: string;
    name: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const AmbassadorPopup: FC<Props> = ({ ambassador, product, isOpen, onClose }) => {
  return (
    <OverlayingPopup isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.ambassador}>
          <img className={styles.ambassadorImage} src={formatUrl(ambassador.imageUrl)} alt='' />
          <ArrowLeft className={styles.ambassadorArrow} />
        </div>
        <div className={styles.comment} style={{ backgroundImage: `url(${formatUrl(product.imageUrl)})` }}>
          <div className={styles.commentTitle}>{product.name}</div>
          <div className={styles.commentText}>{parse(ambassador.comment)}</div>
          <a className={styles.commentButton} href={`/products/${product.id}`}>
            Подробнее
          </a>
          <button className={styles.commentCloseButton} type='button' onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
      </div>
    </OverlayingPopup>
  );
};

export default AmbassadorPopup;
