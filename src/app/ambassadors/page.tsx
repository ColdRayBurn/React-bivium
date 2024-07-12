import React from 'react';
import styles from './Ambassadors.module.css';
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";
import classes from "@/app/help/HelpSection.module.css";

const AmbassadorsSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <BackwardLink href='/help' text='Помощь / Стать амбасадором или представителем бренда' className={classes.backwardLinkMargin}/>
            <h1 className={styles.title}>Условия доставки</h1>
        </div>
    );
};

export default AmbassadorsSection;