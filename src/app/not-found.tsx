import {FC} from 'react';
import styles from '@/app/not-found.module.css';
import Link from 'next/link';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import classNames from "classnames";



const NotFound: FC = () => {
    return (
        <main className={classNames(styles.container, 'container')}>
            <h1 className={styles.title}>Страница не найдена</h1>
            <div className={styles.wrapper__not_found}>
                <div className={styles.picture}>
                    <img src={'/images/404.png'} alt={'404 Error'}/>
                </div>
                <div className={styles.description}>
                    Извините, но запрашиваемая Вами страница не <br/>
                    существует. Возможно, вы ввели неправильный <br/>
                    адрес или страница была перемещена.<br/><br/>

                    <div style={{fontWeight: 600}}>Что вы можете сделать:</div>
                    <br/>

                    <ul>
                        <li>Проверьте правильность введенного адреса.</li>
                        <li>Перейдите на <Link href={'/'}>главную страницу</Link>.</li>
                        <li>Используйте поиск на сайте, чтобы найти нужную информацию.</li>
                        <li><Link href={'/'}>Свяжитесь с нами</Link>, если вы считаете, что это ошибка.</li>
                    </ul>
                </div>
            </div>
            <section className='container'>
                <DeliveryInformation className={styles.deliveryInformation} withButton/>
            </section>
        </main>
    );
};

export default NotFound;
