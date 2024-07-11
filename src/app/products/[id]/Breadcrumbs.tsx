import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

interface Crumb {
  name: string;
  path: string;
};

interface Props {
  className?: string;
  crumbs: Crumb[];
};

const Breadcrumbs: FC<Props> = ({ className, crumbs }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      {crumbs.map((crumb, crumbIndex) => {
        if (crumbIndex === 0) {
          return <Link key={crumbIndex} href={crumb.path}>{crumb.name}</Link>;
        }

        return (
          <>
            <span>{'\u00A0'}/{'\u00A0'}</span>
            <Link href={crumb.path}>{crumb.name}</Link>
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
