import { FC } from 'react';
import classNames from 'classnames';
import styles from './Offer.module.css';

import ExpandableText from '@/components/ui/ExpandableText/ExpandableText';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

const Offer: FC = () => {
  return (
    <section className={classNames(styles.container, 'container')}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardOfferText}>Режим Bivium</div>
          <div className={styles.cardTitle}>Турнир по SkiErg</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardOfferText}>Промокоды для<br />амбассадоров</div>
          <div className={styles.cardTitle}>Экипировка для профессионалов</div>
        </div>
      </div>
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Философия нашего продукта — движение</h2>
        <div className={styles.blockDescription}>
          <ExpandableText>
            Bivium – это оригинальный российский бренд экипировки для циклических видов спорта, лыжи, бег, велосипед. Это бренд для людей, которые не могут жить без движения, которые ценят себя, надежность и комфорт. Мы предельно ответственно подходим к собственной продукции, подбор материалов, разработка дизайна, период испытаний высокой интенсивности и только потом, этот продукт предлагается вам.
            Bivium – это оригинальный российский бренд экипировки для циклических видов спорта, лыжи, бег, велосипед. Это бренд для людей, которые не могут жить без движения, которые ценят себя, надежность и комфорт. Мы предельно ответственно подходим к собственной продукции, подбор материалов, разработка дизайна, период испытаний высокой интенсивности и только потом, этот продукт предлагается вам.
          </ExpandableText>
        </div>
      </div>
      <DeliveryInformation />
    </section>
  );
};

export default Offer;
