import { FC } from 'react';
import classNames from 'classnames';

import Breadcrumbs from './Breadcrumbs';
import Product from './Product';
import Description from './Description';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import api from '@/api';
import { IProduct } from '@/models';
import { getCatalogCategoryNameById } from '@/utils/getCatalogCategoryNameById';

import styles from './page.module.css';

interface Props {
  params: { id: string }
};

const ProductPage: FC<Props> = async ({ params: { id } }) => {
  const product = await api.get(`products/${id}/`).json<IProduct>();

  return (
    <main className={classNames(styles.wrapper, 'container')}>
      <Breadcrumbs className={styles.breadcrumbs} crumbs={[
        { name: getCatalogCategoryNameById(product.categoryId)!, path: `/catalog/${getCatalogCategoryNameById(product.categoryId)}` },
        { name: product.name, path: `/products/${product.id}` }
      ]} />
      <Product />
      <Description text={product.description} />
      <RelatedProducts className={styles.relatedProducts} relatedTo={product.id} />
      <DeliveryInformation className={styles.deliveryInformation} />
    </main>
  );
};

export default ProductPage;
