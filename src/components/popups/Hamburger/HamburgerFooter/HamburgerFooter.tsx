import { FC } from 'react';
import classNames from 'classnames';

import VKIcon from '@icons/vk.svg';
import TelegramIcon from '@icons/telegram.svg';
import InstagramIcon from '@icons/instagram.svg';

import styles from './HamburgerFooter.module.css';

interface Props {
  className?: string;
}

const HamburgerFooter: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.row}>
        <a className={styles.socialIcon} href='http://' target='_blank' rel='noopener noreferrer'>
          <VKIcon />
        </a>
        <div className={styles.divider}></div>
        <a className={styles.socialIcon} href='http://' target='_blank' rel='noopener noreferrer'>
          <TelegramIcon />
        </a>
        <div className={styles.divider}></div>
        <a className={styles.socialIcon} href='http://' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon />
        </a>
      </div>
      <div className={styles.row}>
        <a className={styles.phoneNumber} href='tel:+8 800 555 05 64'>
          8 800 555 05 64
        </a>
      </div>
    </div>
  );
};

export default HamburgerFooter;
