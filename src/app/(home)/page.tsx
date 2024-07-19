import { FC } from 'react';
import classNames from 'classnames';

import Hero from './Hero';
import Catalog from './Catalog';
import Banner from './Banner';
import Lookbooks from './Lookbooks';
import AmbassadorsProducts from '@/components/AmbassadorsProducts/AmbassadorsProducts';
import Description from './Description';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import api from '@/api';
import { IMetaHomepageResponse } from '@/api/models';

import styles from './page.module.css';

const Page: FC = async () => {
  const meta = await api.get('meta/homepage/').json<IMetaHomepageResponse>();

  return (
    <main className={styles.wrapper}>
      <Hero slides={meta.heroCarousel} />
      <Catalog />
      <Banner
        title='Партнёрам'
        subtitle='Внимание нашим будущим'
        picture={meta.banner.picture}
        mobilePicture={meta.banner.pictureMobile}
      />
      <Lookbooks
        items={[
          {
            topText: 'Трейл',
            bottomText: 'Экипировка',
            picture: 'https://i.imgur.com/aEY9Vmp.jpeg',
            mobilePicture: null
          },
          {
            topText: 'Трейл',
            bottomText: 'Экипировка',
            picture: 'https://i.imgur.com/aEY9Vmp.jpeg',
            mobilePicture: null
          },
          {
            topText: 'Трейл',
            bottomText: 'Экипировка',
            picture: 'https://i.imgur.com/aEY9Vmp.jpeg',
            mobilePicture: null
          }
        ]}
      />
      <Banner
        className={styles.bannerAmbassadors}
        title='Наши амбассадоры'
        subtitle='Знакомьтесь,'
        picture={meta.banner.picture}
        mobilePicture={meta.banner.pictureMobile}
      />
      <div className={classNames(styles.ambassadorsProducts, 'container')}>
        <AmbassadorsProducts />
      </div>
      <Description title={meta.description.title} text={meta.description.text} />
      <section className='container'>
        <DeliveryInformation className={styles.deliveryInformation} withButton />
      </section>
    </main>
  );
};

export default Page;
