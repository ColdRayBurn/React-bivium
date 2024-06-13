import { FC } from 'react';
import classNames from 'classnames';
import styles from './page.module.css';

import Breadcrumbs from './Breadcrumbs';
import Product from './Product';
import Description from './Description';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

const Page: FC = () => {
  return (
    <main className={classNames(styles.wrapper, 'container')}>
      <Breadcrumbs crumbs={[{ name: 'Акссесуары', path: '#' }, { name: 'Шапка «Баланс»', path: '#' }]} />
      <Product />
      <Description />
      <RelatedProducts className={styles.relatedProducts} />
      <DeliveryInformation />
    </main>
  );
};

export default Page;
