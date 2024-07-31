'use client';

import { FC } from 'react';

import Card from '@/components/ui/Card/Card';
import ShipmentContent from '@/components/ui/ShipmentContent/ShipmentContent';

import CheckCircleIcon from '@icons/check-circle.svg';

import { formatUrl } from '@/utils/formatUrl';
import { useAppSelector } from '@/redux/hooks';
import { IOrder } from '@/models';

import styles from './Sidebar.module.css';

interface Props {
  orderData: IOrder | null;
}

const Sidebar: FC<Props> = ({ orderData }) => {
  const { email } = useAppSelector(selector => selector.user);

  return (
    <div className={styles.wrapper}>
      {orderData && (
        <ShipmentContent
          products={orderData.items.map(item => ({
            image: formatUrl(item.image),
            amount: item.quantity,
            color: item.color,
            name: item.name,
            price: item.price,
            size: item.size
          }))}
        />
      )}
      <Card>
        <div className={styles.email}>
          <div className={styles.emailHeader}>
            <CheckCircleIcon />
            E-Mail адрес
          </div>
          <div className={styles.emailText}>{email}</div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
