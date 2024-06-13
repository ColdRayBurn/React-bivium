import { FC } from 'react';
import styles from './PartnerCard.module.css';

interface Props {
  image: string;
  name: string;
  address: string;
  phonenumber: string;
  email: string;
};

const PartnerCard: FC<Props> = ({ image, name, address, phonenumber, email }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt='' />
      <div className={styles.boldText}>{name}</div>
      <div className={styles.thinText}>{address}</div>
      <a className={styles.boldText} href={`tel:${phonenumber}`}>{phonenumber}</a>
      <a className={styles.boldText} href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default PartnerCard;
