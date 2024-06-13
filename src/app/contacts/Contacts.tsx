import { FC } from 'react';
import styles from './Contacts.module.css';

const Contacts: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <h1 className={styles.title}>Контакты</h1>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>E-mail</div>
            <a className={styles.itemText} href='mailto:info@bivium.ru'>info@bivium.ru</a>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Телефон</div>
            <a className={styles.itemText} href='tel:8 800 555 05 64'>8 800 555 05 64</a>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>г. Москва</div>
            <div className={styles.itemText}>ул. Привольная 56</div>
          </div>
        </div>
      </div>
      <img className={styles.image} src='https://placehold.co/600x400/EEE/31343C' alt='' />
    </div>
  );
};

export default Contacts;
