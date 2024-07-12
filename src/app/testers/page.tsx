import React from 'react';
import classes from '@/app/help/HelpSection.module.css';
import Button from '@/components/ui/Button/Button';
import styles from './Testers.module.css';
import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import description from "@/app/catalog/[id]/Description";

const Testers: React.FC = () => {
    return (
        <main className="container">
            <div className={styles.testers}>
                <BackwardLink
                    href={'/help'}
                    text={'Помощь / Стать тестировщиком'}
                    className={classes.backwardLinkMargin}
                />
                <h1 className={styles.title}>Стать тестировщиком</h1>
                <div className={styles.gridWrapper}>
                    <div className={styles.description__wrapper}>
                        <div className={styles.description}>
                            Нам очень важна обратная связь. Нам важен Ваш опыт использования нашей продукции, поэтому мы
                            запускаем
                            проект, в котором каждый, кто купил нашу вещь и готов дать честный отзыв, может стать
                            тестировщиком.
                            С Вас честный отзыв, с нас возможность участвовать в создании новой коллекции и шанс первым
                            попробовать
                            новую эксклюзивную экипировку раньше всех.
                        </div>
                        <div className={styles.btns__container}>
                            <Button type='submit' variant='negative' icon={false}>Отправить заявку</Button>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={'/images/testers.png'} className={styles.image}/>
                    </div>
                </div>
                <DeliveryInformation className={styles.deliveryInformationContainer}/>
            </div>
        </main>
    );
};

export default Testers;
