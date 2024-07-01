import { FC } from 'react';
import Hero from './Hero';
import Catalog from './Catalog';
import Partners from './Partners';
import Offer from './Offer';

import api from '@/api';
import { IMetaHomepageResponse } from '@/api/models';

const Page: FC = async () => {
  const meta = await api.get('meta/homepage/').json<IMetaHomepageResponse>();

  return (
    <>
      <Hero slides={meta.heroCarousel} />
      <Catalog />
      <Partners name={meta.banner.name} picture={meta.banner.picture} pictureMobile={meta.banner.pictureMobile} />
      <Offer blockUnderBanner={meta.blockUnderBanner} description={meta.description} />
    </>
  );
};

export default Page;
