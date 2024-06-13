import { FC } from 'react';
import styles from './page.module.css';

import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import Contacts from './Contacts';
import Partners from './Partners';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

const Page: FC = () => {
  return (
    <main className='container'>
      <BackwardLink href='/' text='На главную' />
      <Contacts />
      <Partners />
      <DeliveryInformation className={styles.deliveryInformation} />
    </main>
  );
};

export default Page;
