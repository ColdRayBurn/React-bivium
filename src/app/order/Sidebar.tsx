import { FC } from 'react';
import styles from './Sidebar.module.css';

import Card from '@/components/ui/Card/Card';
import ShipmentContent from '@/components/ui/ShipmentContent/ShipmentContent';

import CheckCircleIcon from '@icons/check-circle.svg';

const Sidebar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ShipmentContent products={[
        {
          name: 'Шапка - «Баланс»',
          amount: 2,
          color: 'Красный',
          image: 'https://placehold.co/600x400/EEE/31343C',
          price: 1500,
          size: 'S (54)'
        },
        {
          name: 'Жилет «Пик»',
          amount: 1,
          color: 'Бежевый',
          image: 'https://placehold.co/600x400/EEE/31343C',
          price: 9800,
          size: 'M (182)'
        }
      ]} discount={15} />
      <Card>
        <div className={styles.email}>
          <div className={styles.emailHeader}>
            <CheckCircleIcon />
            E-Mail адрес
          </div>
          <div className={styles.emailText}>donald.draper@sterling-cooper.com</div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
