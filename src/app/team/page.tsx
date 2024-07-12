import React from 'react';
import Article from '@/components/Article/Article';
import styles from '@/app/sizes/SizesSection.module.css';

const TeamSection: React.FC = () => {

    const content = (
        <>
            <div className={styles.description}>
                Lorem ipsum
            </div>
        </>
    );

    return (
        <Article
            title='Команда BIVIUM'
            backLinkText='Помощь / Команда BIVIUM'
            backLinkHref='/help'
            content={content}
        />
    );
};

export default TeamSection;