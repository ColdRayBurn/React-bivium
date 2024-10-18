'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';

import AmbassadorPopup from '@/components/popups/AmbassadorPopup/AmbassadorPopup';
import CommentIcon from '@icons/comment.svg';

import styles from './AmbassadorComment.module.css';

interface Props {
  ambassador: {
    comment: string;
    imageUrl: string;
  };
  product: {
    id: number;
    imageUrl: string;
    name: string;
  };
  className?: string;
}

const AmbassadorComment: FC<Props> = ({ ambassador, product, className }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button className={classNames(styles.wrapper, className)} type='button' onClick={() => setIsPopupOpen(true)}>
        <CommentIcon />
        <span>
          Комментарий
          <br />
          амбассадора
        </span>
      </button>
      <AmbassadorPopup
        ambassador={{ comment: ambassador.comment, imageUrl: ambassador.imageUrl }}
        product={{ id: product.id, imageUrl: product.imageUrl, name: product.name }}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default AmbassadorComment;
