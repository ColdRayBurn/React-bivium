import React from 'react';
import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import styles from './Article.module.css';
import classes from '@/app/help/HelpSection.module.css';

interface ArticleProps {
    title: string;
    backLinkText: string;
    backLinkHref: string;
    content: React.ReactNode;
    buttons?: React.ReactNode;
    images?: React.ReactNode;
    useGrid?: boolean;
}

const Article: React.FC<ArticleProps> = ({title, backLinkText, backLinkHref, content, buttons, images, useGrid = false}) => {
    return (
        <div className='container'>
            <BackwardLink href={backLinkHref} text={backLinkText} className={classes.backwardLinkMargin}/>
            <h1 className={styles.title}>{title}</h1>
            <div className={useGrid ? styles.gridWrapper : ''}>
                <div className={styles.description}>
                    {content}
                    {buttons}
                </div>
                {images && <div className={styles.imageContainer}>{images}</div>}
            </div>
            <div className={styles.deliveryInformationContainer}>
                <DeliveryInformation/>
            </div>
        </div>
    );
};

export default Article;
