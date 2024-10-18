import { FC, useEffect, RefObject, useRef } from 'react';
import parse from 'html-react-parser';
import styles from './AmbassadorPopup.module.css';

import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';

import CrossIcon from '@icons/cross.svg';
import ArrowLeft from '@icons/arrow-left.svg';

import { formatUrl } from '@/utils/formatUrl';

interface Props {
  rootRef?: RefObject<HTMLElement>;
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

const AmbassadorPopup: FC<Props> = ({ rootRef, ambassador, product, isOpen, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef) {
      return;
    }

    const wrapperElement = wrapperRef.current!;
    const rootElement = rootRef.current!;

    if (!isOpen) {
      return;
    }

    wrapperElement.style.position = 'absolute';
    wrapperElement.style.top = `${rootElement.getBoundingClientRect().top}px`;

    if (rootElement.getBoundingClientRect().left + wrapperElement.getBoundingClientRect().width > window.innerWidth) {
      wrapperElement.style.right = `calc(100dvw - ${rootElement.getBoundingClientRect().left}px - ${rootElement.getBoundingClientRect().width}px)`;
      wrapperElement.classList.toggle(styles.wrapper_reversed, true);
    } else {
      wrapperElement.style.left = `${rootElement.getBoundingClientRect().left}px`;
      wrapperElement.classList.toggle(styles.wrapper_reversed, false);
    }

    const onScroll = () => {
      wrapperElement.style.top = `${rootElement.getBoundingClientRect().top}px`;

      if (rootElement.getBoundingClientRect().left + wrapperElement.getBoundingClientRect().width > window.innerWidth) {
        wrapperElement.style.right = `calc(100dvw - ${rootElement.getBoundingClientRect().left}px - ${rootElement.getBoundingClientRect().width}px)`;
        wrapperElement.classList.toggle(styles.wrapper_reversed, true);
      } else {
        wrapperElement.style.left = `${rootElement.getBoundingClientRect().left}px`;
        wrapperElement.classList.toggle(styles.wrapper_reversed, false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [rootRef, isOpen]);

  return (
    <OverlayingPopup isOpen={isOpen} onClose={onClose}>
      <div ref={wrapperRef} className={styles.wrapper}>
        <div className={styles.ambassador}>
          <img className={styles.ambassadorImage} src={formatUrl(ambassador.imageUrl)} alt='' />
          <ArrowLeft className={styles.ambassadorArrow} />
        </div>
        <div className={styles.comment}>
          <div className={styles.commentTitle}>{product.name}</div>
          <div className={styles.commentText}>{parse(ambassador.comment)}</div>
          <a className={styles.commentButton} href={`/products/${product.id}`}>
            Подробнее
          </a>
          <button className={styles.commentCloseButton} type='button' onClick={onClose}>
            <CrossIcon />
          </button>
          <img className={styles.commentImage} src={formatUrl(product.imageUrl)} alt='' />
        </div>
      </div>
    </OverlayingPopup>
  );
};

export default AmbassadorPopup;
