import { FC } from 'react';
import classNames from 'classnames';
import styles from './page.module.css';
import Button from '@/components/ui/Button/Button';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

const Page: FC = () => {
  return (
    <main className={classNames(styles.wrapper, 'container')}>
      <div className={styles.title}>Спасибо, ждём Вас снова!</div>
      <div className={styles.orderStatus}>
        Заказ <u>№000001</u> успешно оформлен
      </div>
      <div className={styles.date}>Дата заказа: 25 июня 2024</div>

      <div className={styles.orderDetails}>
        <div className={styles.orderItems}>
          <h2>Содержимое отправления</h2>
          <div className={styles.orderItem}>
            <img src='https://via.placeholder.com/80' alt='Шапка - Баланс' />
            <div className={styles.orderItemInfo}>
              <div className={styles.orderItemDetail}>
                <div className={styles.orderItemName}>Шапка - "Баланс"</div>
                <div className={styles.orderItemDesc}>
                  <p>
                    <strong>Цвет:</strong> Красный
                  </p>
                  <p>
                    <strong>Размер:</strong> S (54)
                  </p>
                  <p>
                    <strong>Количество:</strong> 1
                  </p>
                </div>
              </div>
              <div className={styles.orderItemPrice}>1 500 ₽</div>
            </div>
          </div>
          <div className={styles.orderItem}>
            <img src='https://via.placeholder.com/80' alt='Жилет Пик' />
            <div className={styles.orderItemInfo}>
              <div className={styles.orderItemDetail}>
                <div className={styles.orderItemName}>Жилет "Пик"</div>
                <div className={styles.orderItemDesc}>
                  <p>
                    <strong>Цвет:</strong> Бежевый
                  </p>
                  <p>
                    <strong>Размер:</strong> M (182)
                  </p>
                  <p>
                    <strong>Количество:</strong> 1
                  </p>
                </div>
              </div>
              <div className={styles.orderItemPrice}>9 800 ₽</div>
            </div>
          </div>
          <div className={styles.orderTotal}>
            <hr />
            <div className={styles.orderTotalCount}>
              <p>2 товара</p>
              <p>11 300 ₽</p>
            </div>

            <hr />
            <div className={styles.orderTotalPrice}>
              <p>Итог:</p>
              <p>11 300 ₽</p>
            </div>
          </div>
        </div>

        <div className={styles.deliveryAddress}>
          <h2>Адрес доставки</h2>
          <p>г. Москва</p>
          <p>ул. Примерная, д. 7, кв. 55</p>
          <textarea placeholder='Комментарий к заказу'></textarea>
          <div className={styles.deliveryAddressDate}>
            <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11 15V11M11 7H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
                stroke='black'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            Ожидаемая дата доставки: 27 июня
          </div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <p>
          Если у вас возникли вопросы, свяжитесь с нами по телефону 8 800 555 65 64 или отправьте письмо на{' '}
          <a href='mailto:info@bivium.ru'>info@bivium.ru</a>
        </p>
      </div>
      <div className={styles.buttons}>
        <Button variant='negative' icon={false}>
          Продолжить покупки
        </Button>
        <Button variant='default' icon={false}>
          Распечатать квитанцию
        </Button>
        <Button variant='default' icon={false}>
          Отследить заказ
        </Button>
      </div>
      <DeliveryInformation className={styles.deliveryInformation} withButton />
    </main>
  );
};

export default Page;
