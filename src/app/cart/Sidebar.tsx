import { FC } from 'react';

import PromocodeInput from './PromocodeInput';
import InformationText from '@/components/ui/InformationText/InformationText';
import Button from '@/components/ui/Button/Button';
import SSLInformation from '@/components/ui/SSLInformation/SSLInformation';

import styles from './Sidebar.module.css';

const Sidebar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Ваши покупки</div>
      <div className={styles.purchases}>
        <div className={styles.purchasesAmount}>2 покупки</div>
        <div className={styles.purchasesPrice}>11 300 ₽</div>
      </div>
      <PromocodeInput className={styles.promocodeInput} />
      <InformationText
        className={styles.informationText}
        text='В случае выбора срочной доставки, её стоимость будет добавлена к сумме заказа'
      />
      <div className={styles.summary}>
        <div className={styles.summaryText}>Итог:</div>
        <div className={styles.summaryPrice}>9 605 ₽</div>
      </div>
      <Button className={styles.orderButton} variant='negative' icon={false}>
        Перейти к заказу
      </Button>
      <SSLInformation className={styles.sslInformation} />
    </div>
  );
};

export default Sidebar;
