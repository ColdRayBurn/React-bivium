import { FC } from 'react';
import Link from 'next/link';

import Article from '@/components/Article/Article';

import styles from './page.module.css';
import ClientPopupButton from '@/components/ClientPopupButton/ClientPopupButton';

const Page: FC = () => {
  return (
    <Article
      breadсrumbs={[
        { name: 'О компании', path: '/about-company' },
        { name: 'Вакансии', path: '/vacancies' }
      ]}
      title='Вакансии'
      content={
        <>
          <div className={styles.contacts}>
            <div className={styles.contactsItems}>
              <div className={styles.contactsItem}>
                <div className={styles.contactsItemTitle}>Контактное лицо</div>
                <div className={styles.contactsItemValue}>Валентин Воскресенский</div>
              </div>
              <div className={styles.contactsItem}>
                <div className={styles.contactsItemTitle}>Электронная почта</div>
                <div className={styles.contactsItemValue}>
                  <a href='mailto:info@bivium.ru'>info@bivium.ru</a>
                </div>
              </div>
              <div className={styles.contactsItem}>
                <div className={styles.contactsItemTitle}>Телефон</div>
                <div className={styles.contactsItemValue}>
                  <a href='tel:+78005550564'>+7 800 555-05-64</a>
                </div>
              </div>
            </div>
            <div className={styles.contactsButton}>
              <ClientPopupButton
                buttonText='Отправить резюме'
                formTitle='Отправить резюме'
                submitButtonText='Отправить'
                cancelButtonText='Отменить'
                icon={false}
                apiEndpoint='feedback/'
              />
            </div>
          </div>
          <div className={styles.vacancies}>
            <div className={styles.vacanciesSection}>
              <div className={styles.vacanciesSectionTitle}>Отдел дизайна</div>
              <div className={styles.vacanciesSectionBody}>
                <Link className={styles.vacanciesItem} href={`/vacancies/${1337}`}>
                  <div className={styles.vacanciesItemHeader}>
                    <div className={styles.vacanciesItemTitle}>Дизайнер спортивного направления</div>
                    <div className={styles.vacanciesItemSalary}>от 80000 руб</div>
                  </div>
                  <div className={styles.vacanciesItemDescription}>Москва / Опыт работы от года / Полная 5/2</div>
                </Link>
                <Link className={styles.vacanciesItem} href={`/vacancies/${1337}`}>
                  <div className={styles.vacanciesItemHeader}>
                    <div className={styles.vacanciesItemTitle}>Дизайнер спортивного направления</div>
                    <div className={styles.vacanciesItemSalary}>от 80000 руб</div>
                  </div>
                  <div className={styles.vacanciesItemDescription}>Москва / Опыт работы от года / Полная 5/2</div>
                </Link>
              </div>
            </div>
            <div className={styles.vacanciesSection}>
              <div className={styles.vacanciesSectionTitle}>Отдел дизайна</div>
              <div className={styles.vacanciesSectionBody}>
                <Link className={styles.vacanciesItem} href={`/vacancies/${1337}`}>
                  <div className={styles.vacanciesItemHeader}>
                    <div className={styles.vacanciesItemTitle}>Дизайнер спортивного направления</div>
                    <div className={styles.vacanciesItemSalary}>от 80000 руб</div>
                  </div>
                  <div className={styles.vacanciesItemDescription}>Москва / Опыт работы от года / Полная 5/2</div>
                </Link>
                <Link className={styles.vacanciesItem} href={`/vacancies/${1337}`}>
                  <div className={styles.vacanciesItemHeader}>
                    <div className={styles.vacanciesItemTitle}>Дизайнер спортивного направления</div>
                    <div className={styles.vacanciesItemSalary}>от 80000 руб</div>
                  </div>
                  <div className={styles.vacanciesItemDescription}>Москва / Опыт работы от года / Полная 5/2</div>
                </Link>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Page;
