'use client';

import { FC, PropsWithChildren, useState } from 'react';
import classNames from 'classnames';
import styles from './Accordion.module.css';

import ArrowRight from '@icons/arrow-right.svg';

interface Props extends PropsWithChildren {
  title: string;
  className?: string;
}

const Accordion: FC<Props> = ({ title, className, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <button className={styles.button} type='button' onClick={() => setIsExpanded(!isExpanded)}>
        <ArrowRight style={{ rotate: isExpanded ? '90deg' : '' }} />
        {title}
      </button>
      <div
        className={styles.bodyWrapper}
        style={{ maxHeight: isExpanded ? '' : 0, overflow: isExpanded ? '' : 'hidden' }}
      >
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
