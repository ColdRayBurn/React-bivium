import { FC } from 'react';
import classNames from 'classnames';

import api from '@/api';
import { IProduct } from '@/models';
import { getCatalogCategoryCodeById, getCatalogCategoryNameByCode } from '@/utils/catalogCategoriesMap';

import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import Gallery from './Gallery/Gallery';
import Product from './Product/Product';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';

import styles from './page.module.css';

interface Props {
  params: { id: string };
}

const Page: FC<Props> = async ({ params: { id } }) => {
  const product = await api.get(`products/${id}/`).json<IProduct>();

  return (
    <>
      <main className={classNames(styles.wrapper, 'container')}>
        <h1 className={styles.title}>{product.name}</h1>
        <Breadcrumbs
          className={styles.breadcrumbs}
          breadсrumbs={[
            {
              name: getCatalogCategoryNameByCode(getCatalogCategoryCodeById(product.categoryId)!),
              path: `/catalog/${getCatalogCategoryCodeById(product.categoryId)}`
            },
            { name: product.name, path: `/products/${product.id}` }
          ]}
        />
        <div className={styles.body}>
          <Gallery className={styles.gallery} images={product.images} />
          <Product className={styles.product} product={product} />
        </div>
      </main>
      <RelatedProducts relatedTo={product.id} />
    </>
  );
};

export default Page;
