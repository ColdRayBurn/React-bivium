import { FC } from 'react';
import styles from './page.module.css';

import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import Contacts from './Contacts';
import Partners from './Partners';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import api from '@/api';
import { IMetaContactspageResponse } from '@/api/models';

const Page: FC = async () => {
  const meta = await api.get('meta/contactspage/').json<IMetaContactspageResponse>();

  return (
    <main className='container'>
      <Breadcrumbs breadсrumbs={[{ name: 'На главную', path: '/' }]} />
      <Contacts contacts={meta.topBlock} />
      <Partners partners={meta.partners} />
      <DeliveryInformation className={styles.deliveryInformation} />
    </main>
  );
};

export default Page;
