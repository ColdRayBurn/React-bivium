import { FC } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

import PhoneIcon from '@/assets/icons/phone.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TelegramIcon from '@/assets/icons/telegram.svg';
import VKIcon from '@/assets/icons/vk.svg';

import VisaIcon from '@/assets/icons/visa.svg';
import MastercardIcon from '@/assets/icons/mastercard.svg';
import MirIcon from '@/assets/icons/mir.svg';
import YandexPayIcon from '@/assets/icons/yandex-pay.svg';

import LogotypeIcon from '@/assets/icons/logotype.svg';
import Button from '@/components/ui/Button/Button';

import api from '@/api';
import { IMetaFooterResponse } from '@/api/models';

const Footer: FC = async () => {
  const meta = await api.get('meta/footer/').json<IMetaFooterResponse>();

  return (
    <footer className={styles.wrapper}>
      <div className='container'>
        <div className={styles.row}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Обратная связь</h2>
            <h4 className={styles.blockSubtitle}>
              <a className={styles.phonenumberLink} href={`tel:${meta.feedback.phone}`}>
                <PhoneIcon />
                {meta.feedback.phone}
              </a>
            </h4>
            <div className={styles.blockBody}>
              <Button type='submit' variant='negative'>{meta.feedback.buttonText}</Button>
            </div>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Мы в соцсетях</h2>
            <h4 className={styles.blockSubtitle}>{meta.socialNetworks.text}</h4>
            <div className={styles.blockBody}>
              <div className={styles.socialIcons}>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <InstagramIcon />
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <TelegramIcon />
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <VKIcon />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Удобная оплата</h2>
            <h4 className={styles.blockSubtitle}>{meta.paymentInformation.text}</h4>
            <div className={styles.blockBody}>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentMethod}>
                  <VisaIcon />
                </div>
                <div className={styles.paymentMethod}>
                  <MastercardIcon />
                </div>
                <div className={styles.paymentMethod}>
                  <MirIcon />
                </div>
                <div className={styles.paymentMethod}>
                  <YandexPayIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.links}>
            <div className={styles.linksTitle}>Помощь</div>
            <div className={styles.linksWrapper}>
              <Link className={styles.linksItem} href='/contacts'>Контакты</Link>
              <Link className={styles.linksItem} href='#'>Размерная таблица</Link>
              <Link className={styles.linksItem} href='#'>Оплата товара</Link>
              <Link className={styles.linksItem} href='#'>Условия доставки</Link>
              <Link className={styles.linksItem} href='#'>Возврат товара</Link>
              <Link className={styles.linksItem} href='#'>Знаки и уход за товарами</Link>
              <Link className={styles.linksItem} href='#'>Акции</Link>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linksTitle}>О компании</div>
            <div className={styles.linksWrapper}>
              <Link className={styles.linksItem} href='#'>Новости</Link>
              <Link className={styles.linksItem} href='#'>Команда</Link>
              <Link className={styles.linksItem} href='#'>О производстве</Link>
              <Link className={styles.linksItem} href='#'>Сертификаты</Link>
              <Link className={styles.linksItem} href='#'>Вакансии</Link>
              <Link className={styles.linksItem} href='#'>Магазины</Link>
              <Link className={styles.linksItem} href='#'>Публичная оферта</Link>
              <Link className={styles.linksItem} href='#'>Политика конфиденциальности</Link>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linksTitle}>Сотрудничество</div>
            <div className={styles.linksWrapper}>
              <Link className={styles.linksItem} href='#'>Условия сотрудничества для оптовых покупателей</Link>
              <Link className={styles.linksItem} href='#'>Стать амбасадором или представителем бренда</Link>
              <Link className={styles.linksItem} href='#'>Стать тестировщиком</Link>
              <Link className={styles.linksItem} href='#'>Команда бренда</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>BIVIUM © 2024</div>
          <Link className={styles.logotype} href='/'>
            <LogotypeIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
