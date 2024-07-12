import React from 'react';
import styles from './VacancySection.module.css';

interface Vacancy {
    title: string;
    location: string;
    experience: string;
    type: string;
    salary: string;
}

interface SectionProps {
    title: string;
    vacancies: Vacancy[];
}

const VacancySection: React.FC<SectionProps> = ({ title, vacancies }) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{title}</h3>
            {vacancies.map((vacancy, index) => (
                <div key={index} className={styles.vacancy}>
                    <div className={styles.vacancyDescription}>
                        <div className={styles.vacancyTitle}>{vacancy.title}</div>
                        <div className={styles.vacancyDetails}>
                            {vacancy.location} / {vacancy.experience} / {vacancy.type}
                        </div>
                    </div>
                    <div className={styles.vacancySalary}>{vacancy.salary}</div>
                </div>
            ))}
        </div>
    );
};

export default VacancySection;
