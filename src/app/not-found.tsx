import { FC } from 'react';
import styles from '@/app/not-found.module.css';
import Button from '@/components/ui/Button/Button';
import Link from 'next/link';


const NotFound: FC = () => {
    return (
        <main className="container">
            <h1 className={styles.title}>Страница не найдена</h1>
            <div className={styles.wrapper}>
                <div className={styles.picture}>
                    <img src={'/images/404.png'} alt={'404 Error'}/>
                </div>
                <div className={styles.description}>
                    <h2>Ошибка 404</h2>
                    <h3>Страница не найдена</h3>
                    <p>Неправильно набран адрес или такой страницы не существует</p>
                    <div className={styles.description_btns}>
                        <Button variant={'negative'} icon={false}>
                            <Link href={'/'}>Перейти на главную</Link>
                        </Button>
                        <Button variant={'default'} icon={false}>
                            <Link href={'/catalog'}>Вернуться в каталог</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
