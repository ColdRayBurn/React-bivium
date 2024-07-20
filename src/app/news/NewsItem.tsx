import { FC } from 'react';
import Link from 'next/link';
import styles from './NewsItem.module.css';

interface NewsItemProps {
    id: number;
    image: string;
    name: string;
    date: string;
    description: string;
}

const NewsItem: FC<NewsItemProps> = ({ id, image, name, date, description }) => (
    <div className={styles.newsItem}>
        <Link href={`/news/${id}`}>
            <div className={styles.wrapper}>
                <img src={image} alt={name}/>
                <div className={styles.textContainer}>
                    <p className={styles.newsItemDate}>{date}</p>
                    <h2 className={styles.newsItemTitle}>{name}</h2>
                    <p className={styles.newsItemDescription}>{description}</p>
                </div>
            </div>
        </Link>
    </div>
);

export default NewsItem;
