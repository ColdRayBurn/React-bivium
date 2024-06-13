'use client';

import { FC, PropsWithChildren, useState } from 'react';
import classNames from 'classnames';
import styles from './ExpandableText.module.css';

import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

interface Props extends PropsWithChildren {
  className?: string;
};

const ExpandableText: FC<Props> = ({ children, className }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={classNames(className, styles.wrapper)}>
      <div className={classNames(styles.text, isExpanded && styles.text_expanded)}>{children}</div>
      {
        !isExpanded &&
        <button className={styles.button} type='button' onClick={() => setExpanded(true)}>
          <ChevronDownIcon />
          Читать далее
        </button>
      }
    </div>
  );
};

export default ExpandableText;
