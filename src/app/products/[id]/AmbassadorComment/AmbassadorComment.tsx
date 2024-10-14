import { FC } from 'react';
import classNames from 'classnames';
import styles from './AmbassadorComment.module.css';

import CommentIcon from '@icons/comment.svg';

interface Props {
  className?: string;
}

const AmbassadorComment: FC<Props> = ({ className }) => {
  return (
    <button className={classNames(styles.wrapper, className)} type='button'>
      <CommentIcon />
      <span>
        Комментарий
        <br />
        амбассадора
      </span>
    </button>
  );
};

export default AmbassadorComment;
