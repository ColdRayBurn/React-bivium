import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { Breadcrumb } from './models/Breadcrumb';

import styles from './Item.module.css';

interface Props extends Breadcrumb {
  withSlash?: boolean;
}

const Item: FC<Props> = ({ name, path, withSlash }) => {
  return (
    <>
      {withSlash && (
        <span>
          {'\u00A0'}/{'\u00A0'}
        </span>
      )}
      <Link className={classNames(styles.wrapper)} href={path}>
        {name}
      </Link>
    </>
  );
};

export default Item;
