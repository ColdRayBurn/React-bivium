import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

import styles from '@/app/not-found.module.css';
import ClientPopupLink from '@/components/ClientPopupButton/ClientPopupLink';

const NotFound: FC = () => {
  return (
    <main className={classNames(styles.container, 'container')}>
      <h1 className={styles.title}>Страница не найдена</h1>
      <div className={styles.wrapper__not_found}>
        <div className={styles.picture}>
          <img src={'/images/404.png'} alt={'404 Error'} />
        </div>
        <div className={styles.description}>
          Извините, но запрашиваемая Вами страница не существует. Возможно, вы ввели неправильный адрес или страница
          была перемещена.
          <br />
          <br />
          <div style={{ fontWeight: 600 }}>Что вы можете сделать:</div>
          <br />
          <ul>
            <li>Проверьте правильность введенного адреса.</li>
            <li>
              Перейдите на <Link href={'/'}>главную страницу</Link>.
            </li>
            <li>Используйте поиск на сайте, чтобы найти нужную информацию.</li>
            <li>
              <ClientPopupLink
                formTitle='Связаться с нами'
                linkText='Связаться с нами'
                cancelText='Отменить'
                submitText='Отправить'
                apiEndpoint='feedback/contact-us/'
              />
              , если вы считаете, что это ошибка.
            </li>
          </ul>
        </div>
      </div>

      <DeliveryInformation className={styles.deliveryInformation} withButton />
    </main>
  );
};

export default NotFound;
