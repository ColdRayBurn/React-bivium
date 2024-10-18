'use client';

import { FC, useState } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';
import Link from 'next/link';
import Accordion from '../Accrodion/Accordion';
import OverlayingPopup from '@/components/popups/OverlayingPopup/OverlayingPopup';
import CrossIcon from '@icons/cross.svg';
import ArrowRight from '@icons/arrow-right.svg';
import { formatUrl } from '@/utils/formatUrl';
import styles from './Accordions.module.css';

interface Props {
  specifications: string;
  sizesTableImage: string | null;
  className?: string;
}

const Accordions: FC<Props> = ({ specifications, sizesTableImage, className }) => {
  const [sizesTablePopupIsOpen, setSizesTablePopupIsOpen] = useState(false);

  return (
    <>
      <div className={classNames(styles.wrapper, className)}>
        {!!specifications.length && (
          <>
            <Accordion title='Харакетиристики'>{parse(specifications)}</Accordion>
            <div className={styles.divider}></div>
          </>
        )}
        {sizesTableImage && (
          <>
            <div onClick={() => setSizesTablePopupIsOpen(true)}>
              <Accordion title='Таблица размеров' isDisabled />
            </div>
            <div className={styles.divider}></div>
          </>
        )}
        <Accordion title='Оплата'>
          Вы можете оплатить заказ наиболее удобным способом, выбирайте тот, который вам больше подходит. Если вы пока
          не готовы оплатить заказ сразу, всегда можете связаться с менеджером, чтобы обсудить все детали. Он подскажет,
          какой способ оплаты лучше выбрать, а затем вы сможете подтвердить его в личном кабинете или получить ссылку
          для оплаты.
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
      <OverlayingPopup isOpen={sizesTablePopupIsOpen} onClose={() => setSizesTablePopupIsOpen(false)}>
        <div className={styles.sizesTablePopup}>
          <div className={styles.sizesTablePopupHeader}>
            <ArrowRight />
            <span>Таблица размеров</span>
          </div>
          <div className={styles.sizesTablePopupImageWrapper}>
            <img className={styles.sizesTablePopupImage} src={formatUrl(sizesTableImage || '')} alt='' />
          </div>
          <button
            className={styles.sizesTablePopupCloseButton}
            type='button'
            onClick={() => setSizesTablePopupIsOpen(false)}
          >
            <CrossIcon />
          </button>
        </div>
      </OverlayingPopup>
    </>
  );
};

export default Accordions;
