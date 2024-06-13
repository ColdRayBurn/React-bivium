import { FC } from 'react';
import styles from './Partners.module.css';

import PartnerCard from '@/components/ui/PartnerCard/PartnerCard';

const Partners: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Магазины-партнёры</div>
      <div className={styles.cities}>
        <div className={styles.city}>
          <div className={styles.cityTitle}>Москва</div>
          <div className={styles.cityContent}>
            <PartnerCard image='https://placehold.co/200x150/EEE/31343C' name='Spine Sport' address='пр. Багратионовский, д. 5 (ТЦ "Филион"),1 этаж' phonenumber='+7 (991) 699 70 87' email='sale@spine-sport.ru' />
            <PartnerCard image='https://placehold.co/200x150/EEE/31343C' name='Spine Sport' address='пр. Багратионовский, д. 5 (ТЦ "Филион"),1 этажdsaddddd dsad sad asdasd' phonenumber='+7 (991) 699 70 87' email='sale@spine-sport.ru' />
            <PartnerCard image='https://placehold.co/200x150/EEE/31343C' name='Spine Sport' address='пр. Багратионовский, д. 5 (ТЦ "Филион"),1 этаж' phonenumber='+7 (991) 699 70 87' email='sale@spine-sport.ru' />
          </div>
        </div>
        <div className={styles.city}>
          <div className={styles.cityTitle}>Санкт-Петербург</div>
          <div className={styles.cityContent}>
            <PartnerCard image='https://placehold.co/200x150/EEE/31343C' name='Spine Sport' address='пр. Багратионовский, д. 5 (ТЦ "Филион"),1 этаж' phonenumber='+7 (991) 699 70 87' email='sale@spine-sport.ru' />
            <PartnerCard image='https://placehold.co/200x150/EEE/31343C' name='Spine Sport' address='пр. Багратионовский, д. 5 (ТЦ "Филион"),1 этажdsaddddd dsad sad asdasd' phonenumber='+7 (991) 699 70 87' email='sale@spine-sport.ru' />
            <PartnerCard image='https://placehold.co/200x150/EEE/31343C' name='Spine Sport' address='пр. Багратионовский, д. 5 (ТЦ "Филион"),1 этаж' phonenumber='+7 (991) 699 70 87' email='sale@spine-sport.ru' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
