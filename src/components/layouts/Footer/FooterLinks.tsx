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
              <Link className={footerStyles.linksItem} href='/contacts'>Контакты</Link>
              <Link className={footerStyles.linksItem} href='#'>Размерная таблица</Link>
              <Link className={footerStyles.linksItem} href='#'>Оплата товара</Link>
              <Link className={footerStyles.linksItem} href='#'>Условия доставки</Link>
              <Link className={footerStyles.linksItem} href='#'>Возврат товара</Link>
              <Link className={footerStyles.linksItem} href='#'>Знаки и уход за товарами</Link>
              <Link className={footerStyles.linksItem} href='#'>Акции</Link>
            </div>
          </div>
          <div className={footerStyles.links}>
            <div className={footerStyles.linksTitle}>О компании</div>
            <div className={footerStyles.linksWrapper}>
              <Link className={footerStyles.linksItem} href='#'>Новости</Link>
              <Link className={footerStyles.linksItem} href='#'>Команда</Link>
              <Link className={footerStyles.linksItem} href='#'>О производстве</Link>
              <Link className={footerStyles.linksItem} href='#'>Сертификаты</Link>
              <Link className={footerStyles.linksItem} href='#'>Вакансии</Link>
              <Link className={footerStyles.linksItem} href='#'>Магазины</Link>
              <Link className={footerStyles.linksItem} href='#'>Публичная оферта</Link>
              <Link className={footerStyles.linksItem} href='#'>Политика конфиденциальности</Link>
            </div>
          </div>
          <div className={footerStyles.links}>
            <div className={footerStyles.linksTitle}>Сотрудничество</div>
            <div className={footerStyles.linksWrapper}>
              <Link className={footerStyles.linksItem} href='#'>Условия сотрудничества для оптовых покупателей</Link>
              <Link className={footerStyles.linksItem} href='#'>Стать амбасадором или представителем бренда</Link>
              <Link className={footerStyles.linksItem} href='#'>Стать тестировщиком</Link>
              <Link className={footerStyles.linksItem} href='#'>Команда бренда</Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1280}>
        <div className={footerLinksStyles.wrapper}>
          <Accordion buttonText='О компании'>
            <Link className={footerLinksStyles.item} href='#'>О бренде</Link>
            <Link className={footerLinksStyles.item} href='#'>О производстве</Link>
            <Link className={footerLinksStyles.item} href='#'>Сертификаты</Link>
            <Link className={footerLinksStyles.item} href='#'>Вакансии</Link>
            <Link className={footerLinksStyles.item} href='#'>Магазины</Link>
            <Link className={footerLinksStyles.item} href='#'>Публичная оферта</Link>
            <Link className={footerLinksStyles.item} href='#'>Политика конфиденциальности</Link>
          </Accordion>
          <Accordion buttonText='Помощь'>
            <Link className={footerLinksStyles.item} href='/contacts'>Контакты</Link>
            <Link className={footerLinksStyles.item} href='#'>Размерная таблица</Link>
            <Link className={footerLinksStyles.item} href='#'>Оплата товара</Link>
            <Link className={footerLinksStyles.item} href='#'>Условия доставки</Link>
            <Link className={footerLinksStyles.item} href='#'>Возврат товара</Link>
            <Link className={footerLinksStyles.item} href='#'>Знаки и уход за товарами</Link>
            <Link className={footerLinksStyles.item} href='#'>Акции</Link>
          </Accordion>
          <Accordion buttonText='Сотрудничество'>
            <Link className={footerLinksStyles.item} href='#'>Условия сотрудничества для оптовых покупателей</Link>
            <Link className={footerLinksStyles.item} href='#'>Стать амбасадором или представителем бренда</Link>
            <Link className={footerLinksStyles.item} href='#'>Стать тестировщиком</Link>
            <Link className={footerLinksStyles.item} href='#'>Команда бренда</Link>
          </Accordion>
        </div>
      </MediaQuery>
    </>
  );
};

export default FooterLinks;
