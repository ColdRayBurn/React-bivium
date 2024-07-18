import {INewsItemDetail, INewsItemList} from '@/api/models';
import { formatDate } from '@/utils/formatDate';
import { formatUrl } from '@/utils/formatUrl';
import { notFound } from 'next/navigation';

import styles from './NewsDetail.module.css';
import classNames from 'classnames';

import api from '@/api';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";


interface Props {
    params: {
        id: string;
    };
}

async function fetchNewsItem(id: string): Promise<INewsItemDetail | null> {
    try {
        const response = await api.get(`news/${id}/`);
        if (!response.ok) {
            console.error(`Failed to fetch news item with id: ${id}`, response.statusText);
            return null;
        }
        const data = await response.text();
        if (!data) {
            console.error(`No data received for news item with id: ${id}`);
            return null;
        }
        const parsedData = JSON.parse(data);
        return Array.isArray(parsedData) ? parsedData[0] : parsedData;
    } catch (error) {
        console.error('Error fetching news item:', error);
        return null;
    }
}

const NewsDetail = async ({ params }: Props) => {
    const detailNewsItem = await fetchNewsItem(params.id);

    if (!detailNewsItem) {
        notFound();
    }

    return (
        <main className={classNames(styles.container, 'container')}>
            <div className={classNames(styles.newsDetail)}>
                <Breadcrumbs className={styles.breadcrumbs} breadсrumbs={[{ name: 'О компании', path: '/about-company' }, { name: 'Новости', path: '/news' }]} withArrow/>
                <header className={styles.header}>
                    <h1 className={styles.title}>{detailNewsItem.name}</h1>
                    <p className={styles.date}>{formatDate(detailNewsItem.date)}</p>
                </header>
                {detailNewsItem.titleDescription && (
                    <p className={styles.title_description}>{detailNewsItem.titleDescription}</p>
                )}
                <div className={styles.content}>
                    <img src={formatUrl(detailNewsItem.image)} alt={detailNewsItem.name} className={styles.image} />
                    <p className={styles.description}>{detailNewsItem.description}</p>
                </div>
                <Breadcrumbs className={styles.breadcrumb} breadсrumbs={[{ name: 'На главную', path: '/' }]} withArrow/>
            </div>
            <DeliveryInformation className={styles.deliveryInformation} withButton />
        </main>
    );
};

export default NewsDetail;

export async function generateStaticParams() {
    const response = await api.get('news/');
    const newsItems: INewsItemList[] = await response.json();
    return newsItems.map(news => ({
        id: news.id.toString()
    }));
}
