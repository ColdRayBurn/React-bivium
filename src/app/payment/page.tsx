import React from 'react';
import styles from './PaymentSection.module.css';
import classes from "@/app/help/HelpSection.module.css";
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";
import DeliveryInformation from "@/components/ui/DeliveryInformation/DeliveryInformation";

const PaymentSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <BackwardLink href='/help' text='Помощь / Условия оплаты' className={classes.backwardLinkMargin}/>
            <h1 className={styles.title}>Условия оплаты</h1>
            <div className={styles.description}>
                <div className={styles.description__subtitle}>1. Оплата банковской картой онлайн:</div>
                <div className={styles.description__element}>
                    Наш сайт подключен к интернет-эквайрингу, и Вы можете оплатить Товар банковской картой. После
                    нажатия
                    кнопки «Оплатить картой» откроется защищенное окно с платежной страницей процессингового центра
                    ЮKassa,
                    где Вам необходимо ввести данные Вашей банковской карты. Для дополнительной аутентификации держателя
                    карты
                    используется протокол 3D Secure. Если Ваш Банк поддерживает данную технологию, Вы будете
                    перенаправлены на
                    его сервер для дополнительной идентификации. Информацию о правилах и методах дополнительной
                    идентификации
                    уточняйте в Банке, выдавшем Вам банковскую карту.
                </div>
                <div className={styles.description__element}>
                    Процессинговый центр ЮKassa защищает и обрабатывает данные Вашей банковской карты по стандарту
                    безопасности
                    PCI DSS 3.0. Передача информации в платежный шлюз происходит с применением технологии шифрования
                    SSL, далее
                    передача информации происходит по закрытым банковским сетям, имеющим наивысший уровень надежности.
                    ЮKassa
                    не передает данные Вашей карты нам и иным третьим лицам. Для дополнительной аутентификации держателя
                    карты
                    используется протокол 3D Secure.
                </div>
                <div className={styles.description__element}>
                    В случае отказа в оплате Вы можете обратиться в службу поддержки клиента банка или в наш контактный
                    центр.
                    Мы рекомендуем Вам заново попробовать произвести оплату через некоторое время. Если это не помогло,
                    стоит
                    обратиться в банк для выяснения причины отказа в оплате.
                </div>
                <div className={styles.description__element}>
                    Все данные, введенные Вами, обрабатываются и защищаются процессинговым центром ЮKassa. Мы используем
                    для
                    этого современные методы защиты информации.
                </div>
                <div className={styles.description__subtitle}>2. Оплата в рассрочку:</div>
                <div className={styles.description__element}>
                    Забирайте свои покупки и платите в течение нескольких месяцев, БЕЗ ПЕРЕПЛАТЫ. Выбирайте удобный
                    способ
                    оплаты через ЮKassa (банковской картой), заполняете все пункты как при оплате банковской картой,
                    переходите
                    по ссылке и вот тут выбираете способ оплаты "в кредит" или "в рассрочку".
                </div>
            </div>
            <div className={styles.deliveryInformationContainer}>
                <DeliveryInformation/>
            </div>
        </div>
    );
};

export default PaymentSection;
