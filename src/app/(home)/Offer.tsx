import { CSSProperties, FC } from 'react';
import classNames from 'classnames';
import styles from './Offer.module.css';

import ExpandableText from '@/components/ui/ExpandableText/ExpandableText';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import { IMetaHomepageResponse } from '@/api/models';
import { formatUrl } from '@/utils/formatUrl';

interface Props {
  blockUnderBanner: IMetaHomepageResponse['blockUnderBanner'];
  description: IMetaHomepageResponse['description'];
};

const Offer: FC<Props> = ({ blockUnderBanner, description }) => {
  return (
    <section className={classNames(styles.container, 'container')}>
      <div className={styles.cards}>
        {blockUnderBanner.map((card, cardIndex) =>
          <div key={cardIndex} className={styles.card} style={{ '--picture': `url(${formatUrl(card.picture)})` } as CSSProperties}>
            <div className={styles.cardOfferText}>{card.topText}</div>
            <div className={styles.cardTitle}>{card.bottomText}</div>
          </div>
        )}
      </div>
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>{description.title}</h2>
        <div className={styles.blockDescription}>
          <ExpandableText>{description.text}</ExpandableText>
        </div>
      </div>
      <DeliveryInformation />
    </section>
  );
};

export default Offer;
