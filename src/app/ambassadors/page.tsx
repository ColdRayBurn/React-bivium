import React from 'react';
import styles from './Ambassadors.module.css';
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";
import classes from "@/app/help/HelpSection.module.css";
import Article from "@/components/ui/Article/Article";
import Button from "@/components/ui/Button/Button";

const AmbassadorsSection: React.FC = () => {

    const images = (
        <>
            <div className={styles.imageContainer}>
                <img src={'/images/logo-article.png'} className={styles.image}/>
            </div>
        </>
    );

    const content = (
        <>
            <div className={styles.description}>
                <div className={styles.element}>
                    Вы яркий и харизматичный спортсмен. У вас много наград, а может быть большая аудитория людей,
                    которым нравится наблюдать за вашими успехами. Вам близко, то что мы делаем. Пишите нам, и станьте
                    частью команды амбассадоров, которую мы сейчас создаем.
                </div>

                <div className={styles.element}>Будет много интересных проектов, много крутых стартов, наград и
                    призов!
                </div>

                <div className={styles.element}>Расскажи о себе по адресу - <u>ambassador@bivium.ru</u></div>
            </div>
        </>
    );

    const buttons = (
        <div className={styles.btns__container}>
            <Button type='submit' variant='negative' icon={false}>Отправить заявку</Button>
        </div>
    );

    return (
        <Article
            title='Собираем команду BIVIUM'
            backLinkText='Помощь / Собираем команду BIVIUM'
            backLinkHref='/help'
            content={content}
            buttons={buttons}
            images={images}
        />
    );
};

export default AmbassadorsSection;