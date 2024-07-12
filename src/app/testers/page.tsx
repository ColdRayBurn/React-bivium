import React from 'react';
import Article from '@/components/Article/Article';
import Button from '@/components/ui/Button/Button';
import styles from './Testers.module.css';

const Testers: React.FC = () => {

    const content = (
        <>
            <div className={styles.description}>
                Нам очень важна обратная связь. Нам важен Ваш опыт использования нашей продукции, поэтому мы запускаем
                проект, в котором каждый, кто купил нашу вещь и готов дать честный отзыв, может стать тестестировщиком.
                С Вас честный отзыв, с нас возможность участвовать в создании новой коллекции и шанс первым попробовать
                новую эксклюзивную экипировку раньше всех.
            </div>
        </>
    );

    const buttons = (
        <div className={styles.btns__container}>
            <Button type='submit' variant='negative' icon={false}>Отправить заявку</Button>
        </div>
    );

    const images = (
        <div className={styles.imageContainer}>
            <img src={'/images/testers.png'} className={styles.image} />
        </div>
    );

    return (
        <Article
            title='Стать тестировщиком'
            backLinkText='Помощь / Стать тестировщиком'
            backLinkHref='/help'
            content={content}
            buttons={buttons}
            images={images}
            useGrid={true}
        />
    );
};

export default Testers;
