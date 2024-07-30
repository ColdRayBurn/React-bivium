'use client';

import { FC } from 'react';

import Card from '@/components/ui/Card/Card';
import ShipmentContent from '@/components/ui/ShipmentContent/ShipmentContent';

import CheckCircleIcon from '@icons/check-circle.svg';

import { useAppSelector } from '@/redux/hooks';
import { IOrder } from './models';

import styles from './Sidebar.module.css';

interface Props {
  orderId: string;
  orderData: IOrder | null;
}

const Sidebar: FC<Props> = ({ orderId, orderData }) => {
  const { email } = useAppSelector(selector => selector.user);

  return (
    <div className={styles.wrapper}>
      {orderData && (
        <ShipmentContent
          products={orderData[orderId].items.map(item => ({
            image: 'image',
            amount: item.quantity,
            color: 'color',
            name: item.name,
            price: parseInt(item.price),
            size: 'size'
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
