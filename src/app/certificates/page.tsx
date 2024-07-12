import React from 'react';
import styles from './Certificates.module.css';
import Article from '@/components/Article/Article';

const Certificates: React.FC = () => {

    const content = (
        <>
            <div className={styles.section}>
                <div className={styles.paragraph}>
                    Сертификаты соответствия - это документы, подтверждающие соответствие всем соответствующим требованиям в министерских законах текущего государства, установленным и обязательном порядке.
                </div>
                <div className={styles.certificates}>
                    <div className={styles.certificate}>
                        <h3 className={styles.certificateTitle}>Сертификат №1</h3>
                        <img src="/images/certificate1.png" className={styles.certificateImage}/>
                    </div>
                    <div className={styles.certificate}>
                        <h3 className={styles.certificateTitle}>Сертификат №2</h3>
                        <img src="/images/certificate2.png" className={styles.certificateImage}/>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <Article
            title='Сертификаты'
            backLinkText='О компании / Сертификаты'
            backLinkHref='/about-company'
            content={content}
        />
    );
};

export default Certificates;