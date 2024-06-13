import { FC } from 'react';
import { UrlObject } from 'url';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './BackwardLink.module.css';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';

interface Props {
  href: string | UrlObject;
  text: string;
  className?: string;
};

const BackwardLink: FC<Props> = ({ href, text, className }) => {
  return (
    <Link className={classNames(className, styles.wrapper)} href={href}>
      <ChevronLeftIcon />
      {text}
    </Link>
  );
};

export default BackwardLink;
