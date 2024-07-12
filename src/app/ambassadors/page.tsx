import React from 'react';
import styles from './Ambassadors.module.css';
import classes from '@/app/help/HelpSection.module.css';
import Button from '@/components/ui/Button/Button';
import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

const AmbassadorsSection: React.FC = () => {

    return (
        <main className='container'>
            <div className={styles.ambassadors}>
                <BackwardLink
                    href={'/help'}
                    text={'Помощь / Собираем команду BIVIUM'}
                    className={classes.backwardLinkMargin}
                />
                <h1 className={styles.title}>Собираем команду BIVIUM</h1>
                <div className={styles.description}>
                    <div className={styles.element}>
                        Вы яркий и харизматичный спортсмен. У вас много наград, а может быть большая аудитория людей,
                        которым нравится наблюдать за вашими успехами. Вам близко, то что мы делаем. Пишите нам, и
                        станьте
                        частью команды амбассадоров, которую мы сейчас создаем.
                    </div>

                    <div className={styles.element}>
                        Будет много интересных проектов, много крутых стартов, наград и призов!
                    </div>

                    <div className={styles.element}>
                        Расскажи о себе по адресу - <a href="mailto:ambassador@bivium.ru">ambassador@bivium.ru</a>
                    </div>
                </div>
                <div className={styles.btns__container}>
                    <Button type='submit' variant='negative' icon={false}>Отправить заявку</Button>
                </div>
                <div className={styles.imageContainer}>
                    <img src={'/images/logo-article.png'} className={styles.image}/>
                </div>
                <DeliveryInformation className={styles.deliveryInformationContainer}/>
            </div>
        </main>
    );
};

export default AmbassadorsSection;