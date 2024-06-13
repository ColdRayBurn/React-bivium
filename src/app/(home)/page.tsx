import { FC } from 'react';
import Hero from './Hero';
import Catalog from './Catalog';
import Partners from './Partners';
import Offer from './Offer';

const Page: FC = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Partners />
      <Offer />
    </>
  );
};

export default Page;
