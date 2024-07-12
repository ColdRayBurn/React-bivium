import React from 'react';
import styles from './Vacancies.module.css';
import VacancySection from './VacancySection';
import Button from '@/components/ui/Button/Button';
import DeliveryInformation from "@/components/ui/DeliveryInformation/DeliveryInformation";

const Vacancies: React.FC = () => {
    const designVacancies = [
        {
            title: 'Дизайнер спортивного направления',
            location: 'Москва',
            experience: 'Опыт работы от года',
            type: 'Полная 5/2',
            salary: 'от 80000 руб',
        },
    ];

    const marketingVacancies = [
        {
            title: 'SMM-специалист',
            location: 'Москва',
            experience: 'Опыт работы от 2-х лет',
            type: 'Гибридный график',
            salary: 'от 80000 руб',
        },
    ];

    return (
        <main className="container">
            <div className={styles.vacancies}>
                <h1 className={styles.title}>Вакансии</h1>
                <div className={styles.contactInfo}>
                    <div className={styles.contactDetail}>
                        <div className={styles.detailName}>Контактное лицо:</div>
                        <div className={styles.detailValue}>Валентин Воскресенский</div>
                    </div>
                    <div className={styles.contactDetail}>
                        <div className={styles.detailName}>Электронная почта:</div>
                        <div className={styles.detailValue}><a href="mailto:info@bivium.ru">info@bivium.ru</a></div>
                    </div>

                    <div className={styles.contactDetail}>
                        <div className={styles.detailName}>Телефон:</div>
                        <div className={styles.detailValue}><a href="tel:+78005550564">+7 800 555-05-64</a></div>
                    </div>
                </div>
                <Button type='submit' variant='negative' icon={false} className={styles.button}>Отправить
                    резюме</Button>
                <VacancySection title="Отдел дизайна" vacancies={designVacancies}/>
                <VacancySection title="Отдел маркетинга" vacancies={marketingVacancies}/>
                <DeliveryInformation className={styles.deliveryInformationContainer}/>
            </div>
        </main>
    );
};

export default Vacancies;
