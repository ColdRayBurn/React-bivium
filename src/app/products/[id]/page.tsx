import { FC } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import classNames from 'classnames';

import api from '@/api';
import { IProduct } from '@/models';
import { getCatalogCategoryCodeById, getCatalogCategoryNameByCode } from '@/utils/catalogCategoriesMap';

import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import Selectors from './Selectors/Selectors';
import Actions from './Actions/Actions';
import AmbassadorComment from './AmbassadorComment/AmbassadorComment';
import Accordions from './Accordions/Accordions';
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
          <div>Галерея</div>
          <div className={styles.product}>
            <Selectors />
            <div className={styles.price}>
              {product.sizes[0].price} <span>₽</span>
            </div>
            <Actions className={styles.actions} />
            <div className={styles.bottom}>
              <div className={styles.bottomColumn}>
                <div className={styles.deliveryInfo}>Бесплатная доставка от 5 000 ₽</div>
                <div className={styles.description}>{parse(product.description)}</div>
                <AmbassadorComment className={styles.ambassadorComment} />
              </div>
              <div className={styles.bottomColumn}>
                <Accordions />
                <Link className={styles.contactsLink} href='/contacts'>
                  Где купить?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <RelatedProducts relatedTo={product.id} />
    </>
  );
};

export default Page;
