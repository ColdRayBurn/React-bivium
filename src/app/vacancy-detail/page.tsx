import React from 'react';
import styles from './VacancyDetail.module.css';
import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import Button from '@/components/ui/Button/Button';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import classes from '@/app/help/HelpSection.module.css';

const VacancyDetail: React.FC = () => {
    return (
        <main className='container'>
            <BackwardLink
                href={'/vacancies'}
                text={'О компании / Вакансии / Дизайнер спортивного направления'}
                className={classes.backwardLinkMargin}
            />
            <h1 className={styles.title}>Дизайнер спортивного направления</h1>
            <div className={styles.imageContainer}>
                <img src="/images/vacancy-detail.png" alt="BIVIUM" className={styles.image} />
            </div>
            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <div className={styles.detailItem__title}>Город:</div>
                    <div className={styles.detailItem__value}>Москва</div>
                </div>
                <div className={styles.detailItem}>
                    <div className={styles.detailItem__title}>Зарплата:</div>
                    <div className={styles.detailItem__value}>от 80000 руб</div>
                </div>
                <div className={styles.detailItem}>
                    <div className={styles.detailItem__title}>Опыт работы:</div>
                    <div className={styles.detailItem__value}>Опыт работы от 1 года</div>
                </div>
                <div className={styles.detailItem}>
                    <div className={styles.detailItem__title}>Тип работы:</div>
                    <div className={styles.detailItem__value}>Полная 5/2</div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.paragraph}>Стаж работы 1-3 года</div>
                <div className={styles.paragraph}>Полный рабочий день</div>
                <div className={styles.paragraph}>Полная занятость</div>
            </div>
            <div className={styles.section}>
                <div className={styles.subtitle}>Обязанности:</div>
                <div className={styles.paragraph}>Разработка дизайнов для сублимационной печати, разработка формы для спортивных команд;</div>
                <div className={styles.paragraph}>Нанесение дизайна на лекала;</div>
                <div className={styles.paragraph}>Подготовка технической документации к моделям для запуска в производство;</div>
                <div className={styles.paragraph}>Работа в команде</div>
                <div className={styles.paragraph}>Авторский надзор за исполнением заказа;</div>
            </div>
            <div className={styles.section}>
                <div className={styles.subtitle}>Требования:</div>
                <div className={styles.paragraph}>Знание программ Adobe Photoshop, Illustrator или Corel DRAW</div>
                <div className={styles.paragraph}>Умение читать лекала, конструкторскую и технологическую документацию</div>
                <div className={styles.paragraph}>Аккуратность и умение подготавливать макет к дальнейшей разработке</div>
                <div className={styles.paragraph}>Умение работать в связке дизайнер/конструктор/технолог</div>
                <div className={styles.paragraph}>Опыт работы в сублимационной печати и принтах приветствуется</div>
                <div className={styles.paragraph}>Быть в курсе современных тенденций</div>
                <div className={styles.paragraph}>Уметь отстаивать свое мнение, стрессоустойчивость.</div>
                <div className={styles.paragraph}>Наличие портфолио. Или ссылки на существующие и актуальные проекты</div>
            </div>
            <div className={styles.section}>
                <div className={styles.subtitle}>Условия:</div>
                <div className={styles.paragraph}>Официальное трудоустройство, соцпакет, 5-дневный график работы с 9:00 до 18:00 или с 8:00 до 17:00</div>
                <div className={styles.paragraph}>Работа в офисе</div>
                <div className={styles.paragraph}>Зп - от 80 000 р.</div>
            </div>
            <Button type='submit' variant='negative' icon={false} className={styles.button}>Отправить резюме</Button>
            <DeliveryInformation className={styles.deliveryInformationContainer}/>
        </main>
    );
};

export default VacancyDetail;
