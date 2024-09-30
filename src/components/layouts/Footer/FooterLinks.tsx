'use client';

import { FC } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import footerStyles from './Footer.module.css';
import footerLinksStyles from './FooterLinks.module.css';

import Accordion from './Accordion';

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const FooterLinks: FC = () => {
  return (
    <>
      <MediaQuery minWidth={1281}>
        <div className={footerStyles.row}>
          <div className={footerStyles.links}>
            <div className={footerStyles.linksTitle}>Помощь</div>
            <div className={footerStyles.linksWrapper}>
              <Link className={footerLinksStyles.item} href='/contacts'>
                Контакты
              </Link>
              <Link className={footerLinksStyles.item} href='/sizes'>
                Размерная таблица
              </Link>
              <Link className={footerLinksStyles.item} href='/payment'>
                Оплата товара
              </Link>
              <Link className={footerLinksStyles.item} href='/delivery'>
                Условия доставки
              </Link>
              <Link className={footerLinksStyles.item} href='/return'>
                Возврат товара
              </Link>
              <Link className={footerLinksStyles.item} href='/care'>
                Знаки и уход за товарами
              </Link>
              <Link className={footerLinksStyles.item} href=''>
                Акции
              </Link>
            </div>
          </div>
          <div className={footerStyles.links}>
            <div className={footerStyles.linksTitle}>О компании</div>
            <div className={footerStyles.linksWrapper}>
              <Link className={footerLinksStyles.item} href='/news'>
                Новости
              </Link>
              <Link className={footerLinksStyles.item} href=''>
                Команда
              </Link>
              <Link className={footerLinksStyles.item} href='/manufacturing'>
                О производстве
              </Link>
              <Link className={footerLinksStyles.item} href='/certificates'>
                Сертификаты
              </Link>
              <Link className={footerLinksStyles.item} href='/vacancies'>
                Вакансии
              </Link>
              <Link className={footerLinksStyles.item} href='/contacts'>
                Магазины
              </Link>
              <Link className={footerLinksStyles.item} href='/public-offer'>
                Публичная оферта
              </Link>
              <Link className={footerLinksStyles.item} href='/privacy-policy'>
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <div className={footerStyles.links}>
            <div className={footerStyles.linksTitle}>Сотрудничество</div>
            <div className={footerStyles.linksWrapper}>
              <Link className={footerLinksStyles.item} href='/conditions'>
                Условия сотрудничества для оптовых покупателей
              </Link>
              <Link className={footerLinksStyles.item} href='/ambassadors'>
                Стать амбасадором или представителем бренда
              </Link>
              <Link className={footerLinksStyles.item} href='/testers'>
                Стать тестировщиком
              </Link>
              <Link className={footerLinksStyles.item} href=''>
                Команда бренда
              </Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1280}>
        <div className={footerLinksStyles.wrapper}>
          <Accordion buttonText='О компании'>
            <Link className={footerLinksStyles.item} href='/about-company'>
              О бренде
            </Link>
            <Link className={footerLinksStyles.item} href='/manufacturing'>
              О производстве
            </Link>
            <Link className={footerLinksStyles.item} href='/certificates'>
              Сертификаты
            </Link>
            <Link className={footerLinksStyles.item} href='/vacancies'>
              Вакансии
            </Link>
            <Link className={footerLinksStyles.item} href='/contacts'>
              Магазины
            </Link>
            <Link className={footerLinksStyles.item} href='/public-offer'>
              Публичная оферта
            </Link>
            <Link className={footerLinksStyles.item} href='/privacy-policy'>
              Политика конфиденциальности
            </Link>
          </Accordion>
          <Accordion buttonText='Помощь'>
            <Link className={footerLinksStyles.item} href='/contacts'>
              Контакты
            </Link>
            <Link className={footerLinksStyles.item} href='/sizes'>
              Размерная таблица
            </Link>
            <Link className={footerLinksStyles.item} href='/payment'>
              Оплата товара
            </Link>
            <Link className={footerLinksStyles.item} href='/delivery'>
              Условия доставки
            </Link>
            <Link className={footerLinksStyles.item} href='/return'>
              Возврат товара
            </Link>
            <Link className={footerLinksStyles.item} href='/care'>
              Знаки и уход за товарами
            </Link>
          </Accordion>
          <Accordion buttonText='Сотрудничество'>
            <Link className={footerLinksStyles.item} href='/conditions'>
              Условия сотрудничества для оптовых покупателей
            </Link>
            <Link className={footerLinksStyles.item} href='/ambassadors'>
              Стать амбасадором или представителем бренда
            </Link>
            <Link className={footerLinksStyles.item} href='/testers'>
              Стать тестировщиком
            </Link>
            <Link className={footerLinksStyles.item} href=''>
              Команда бренда
            </Link>
          </Accordion>
        </div>
      </MediaQuery>
    </>
  );
};

export default FooterLinks;
