import { FC } from 'react';
import classNames from 'classnames';
import styles from './DeliveryInformation.module.css';

import ReturnArrowIcon from '@/assets/icons/return-arrow.svg';
import TruckIcon from '@/assets/icons/truck.svg';

interface Props {
  className?: string;
}

const DeliveryInformation: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <div className={styles.item}>
        <ReturnArrowIcon />
        14 дней на возврат
      </div>
      <div className={styles.item}>
        <TruckIcon />
        Быстрая доставка (от 5 дней)
      </div>
    </div>
  );
};

export default DeliveryInformation;
