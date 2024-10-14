import { FC } from 'react';
import Link from 'next/link';
import Accordion from '../Accrodion/Accordion';
import styles from './Accordions.module.css';

const Accordions: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Accordion title='Харакетиристики'>
        Технические характеристики: 82% - полиэстер 18% - спандекс Особенности: cвернутые рукава молния на груди
        отверстия под часы светоортажающие элементы Свойства материала: тянется в 4-х направлениях быстро сохнет не
        выгорает на солнце
      </Accordion>
      <div className={styles.divider}></div>
      <Accordion title='Таблица размеров' />
      <div className={styles.divider}></div>
      <Accordion title='Оплата'>
        Вы можете оплатить заказ наиболее удобным способом, выбирайте тот, который вам больше подходит. Если вы пока не
        готовы оплатить заказ сразу, всегда можете связаться с менеджером, чтобы обсудить все детали. Он подскажет,
        какой способ оплаты лучше выбрать, а затем вы сможете подтвердить его в личном кабинете или получить ссылку для
        оплаты.
        <Link className={styles.accordionLink} href='/payment'>
          Подробнее
        </Link>
      </Accordion>
      <div className={styles.divider}></div>
      <Accordion title='Доставка'>
        В интернет-магазине BIVIUM при оформлении заказа, вы можете выбрать наиболее подходящий для вас вариант
        доставки.
        <Link className={styles.accordionLink} href='/delivery'>
          Подробнее
        </Link>
      </Accordion>
      <div className={styles.divider}></div>
      <Accordion title='Возврат'>
        Вы можете вернуть товар надлежащего качества в течение 14 дней с момента получения. Изделие не было в
        использовании, а его товарный вид, оригинальная упаковка и ярлыки должны быть сохранены.
        <Link className={styles.accordionLink} href='/return'>
          Подробнее
        </Link>
      </Accordion>
    </div>
  );
};

export default Accordions;
