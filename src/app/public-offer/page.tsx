import React from 'react';
import Article from '@/components/Article/Article';
import styles from './PublicOffer.module.css';

const PublicOffer: React.FC = () => {

    const content = (
        <>
            <div className={styles.section}>
                <div className={styles.paragraph}>
                    ООО «ОЛКИДС», в лице интернет-магазина https://bivium.ru (далее Продавец), публикует настоящий
                    договор, являющийся публичным договором-офертой в адрес как физических, так и юридических лиц (далее
                    Покупатель) о нижеследующем:
                </div>
                <h2 className={styles.heading}>1. ПРЕДМЕТ ДОГОВОРА-ОФЕРТЫ</h2>
                <div className={styles.paragraph}>
                    1.1. Продавец обязуется передать в собственность Покупателю, а Покупатель обязуется оплатить и
                    принять заказанные в интернет-магазине https://bivium.store товары (далее Товар).
                </div>
                <div className={styles.paragraph}>
                    1.2. Текст данного Договора является публичной офертой (в соответствии со статьей 435 и частью 2
                    статьи 437 Гражданского кодекса РФ).
                </div>
            </div>

            <div className={styles.section}>
            <h2 className={styles.heading}>2. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                <div className={styles.paragraph}>
                    2.1. Заказ Покупателем Товара, размещенного на сайте Интернет-магазина означает, что Покупатель согласен со всеми условиями настоящей Оферты.
                </div>
                <div className={styles.paragraph}>
                    2.2. Администрация сайта Интернет-магазина имеет право вносить изменения в Оферту без уведомления Покупателя.
                </div>
                <div className={styles.paragraph}>
                    2.3. Срок действия Оферты не ограничен, если иное не указано на сайте Интернет-магазина.
                </div>
                <div className={styles.paragraph}>
                    2.4. Продавец предоставляет Покупателю полную и достоверную информацию о Товаре, включая информацию об основных потребительских свойствах Товара, на сайте Интернет-магазина, в разделе Каталог.
                </div>
                <div className={styles.paragraph}>
                    2.5. В связи с разными техническими характеристиками мониторов цвет Товара может отличаться от представленного на сайте.
                </div>
                <div className={styles.paragraph}>
                    2.6. Характеристики и внешний вид Товара могут отличаться от описанных на сайте.
                </div>
                <div className={styles.paragraph}>
                    2.7. Правила обмена или возврата Товара размещены на сайте Интернет-магазина в разделе Возврат и Обмен.
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.heading}>3. ЦЕНА ТОВАРА</h2>
                <div className={styles.paragraph}>
                    3.1. Цена на каждую позицию Товара указана на сайте Интернет-магазина.
                </div>
                <div className={styles.paragraph}>
                    3.2. Продавец имеет право в одностороннем порядке изменить цену на любую позицию Товара.
                </div>
                <div className={styles.paragraph}>
                    3.3. Изменение Продавцом цены на оплаченный Покупателем Товар не допускается.
                </div>
                <div className={styles.paragraph}>
                    3.4. Продавец указывает стоимость доставки Товара на сайте Интернет-магазина или согласовывает при дополнительном общении с покупателем, так как стоимость доставки, устанавливается сторонней организацией – осуществляющей доставку товара. Стоимость и способы доставки Товара размещены на сайте Интернет-магазина в разделе Способы Доставки.
                </div>
                <div className={styles.paragraph}>
                    3.5. Обязательства Покупателя по оплате Товара считаются исполненными с момента поступления денежных средств на расчетный счёт продавца.
                </div>
                <div className={styles.paragraph}>
                    3.6. Расчеты между Продавцом и Покупателем за Товар производятся способами, указанными на сайте Интернет-магазина в разделе Способы Оплаты.
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.heading}>4. ОФОРМЛЕНИЕ ЗАКАЗА</h2>
                <div className={styles.paragraph}>
                    4.1. Заказ Товара осуществляется Покупателем через сервис сайта Интернет-магазина https://bivium.ru.
                </div>
                <div className={styles.paragraph}>
                    4.2. При оформлении заказа на сайте Интернет-магазина Покупатель обязуется предоставить следующую информацию:
                </div>
                <div className={styles.paragraph}>4.2.1. фамилия, имя Покупателя или указанного им лица (получателя);</div>
                <div className={styles.paragraph}>4.2.2. адрес, по которому следует доставить Товар (если доставка до адреса Покупателя);</div>
                <div className={styles.paragraph}>4.2.3. адрес электронной почты;</div>
                <div className={styles.paragraph}>4.2.4. контактный телефон (по желанию Покупателя).</div>
                <div className={styles.paragraph}>
                    4.3. Наименование, количество, ассортимент, цена выбранного Покупателем Товара указываются в корзине Покупателя на сайте Интернет-магазина.
                </div>
                <div className={styles.paragraph}>
                    4.4. Если Продавцу необходима дополнительная информация, он вправе запросить ее у Покупателя. В случае не предоставления необходимой информации Покупателем, Продавец не несет ответственности за выбранный Покупателем Товар.
                </div>
                <div className={styles.paragraph}>
                    4.5. Принятие Покупателем условий настоящей Оферты осуществляется посредством внесения Покупателем соответствующих данных в форму заказа Товара на сайте Интернет-магазина.
                </div>
                <div className={styles.paragraph}>
                    4.6. Продавец не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении Заказа.
                </div>
                <div className={styles.paragraph}>
                    4.7. Покупатель несет ответственность за достоверность предоставленной информации при оформлении Заказа.
                </div>
                <div className={styles.paragraph}>
                    4.8. Договор купли-продажи дистанционным способом между Продавцом и Покупателем считается заключенным с момента выдачи (отправки) Продавцом (или через организацию посредника, оказывающую услуги интернет эквайринга) Покупателю кассового или товарного чека либо иного документа, подтверждающего оплату Товара.
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.heading}>5. ДОСТАВКА И ПЕРЕДАЧА ТОВАРА ПОКУПАТЕЛЮ</h2>
                <div className={styles.paragraph}>
                    5.1. Продавец оказывает Покупателю услуги по доставке Товара одним из способов, указанных на сайте Интернет-магазина в разделе Способы Доставки.
                </div>
                <div className={styles.paragraph}>
                    5.2. Если Договор купли-продажи товара дистанционным способом (далее – Договор) заключен с условием о доставке Товара Покупателю, Продавец обязан в установленный Договором срок доставить Товар в место, указанное Покупателем, а если место доставки Товара Покупателем не указано, то по месту его жительства или регистрации (в случае владения данной информацией).
                </div>
                <div className={styles.paragraph}>
                    5.3. Место доставки Товара Покупатель указывает при оформлении Заказа на приобретение Товара.
                </div>
                <div className={styles.paragraph}>
                    5.4. Срок доставки Товара Покупателю состоит из срока обработки заказа и срока доставки. Сроки доставки Товара Покупателю размещены на сайте Интернет-магазина в разделе Способы Доставки.
                </div>
                <div className={styles.paragraph}>
                    5.5. Доставленный Товар передается Покупателю, а при отсутствии Покупателя - любому лицу, предъявившему квитанцию или иной документ, подтверждающий заключение Договора или оформление доставки Товара.
                </div>
                <div className={styles.paragraph}>
                    5.6. Информация о Товаре доводится до сведения Покупателя на этикетках, путем нанесения маркировки или иным способом, принятым для отдельных видов товаров.
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.heading}>6. РЕКВИЗИТЫ ПРОДАВЦА</h2>
                <div className={styles.contacts}>
                    Общество с ограниченной ответственностью "ОЛКИДС"<br />
                    Юр. адрес: 140060, Московская обл., г. Бронницы,<br />
                    ул. Кирпичный проезд, д. 7А, пом. 46, этаж 3, а/я 2197<br />
                    Телефон: 8 800 555 05 54<br />
                    ИНН / КПП: 5002004730/500201001<br />
                    ОГРН: 1165040056818<br />
                    Р/с: 40702810702490002144<br />
                    БИК: 044525593<br />
                    Банк ОАО "АЛЬФА-БАНК" г. Москва<br />
                    к/счет банка 30101810200000000593
                </div>
            </div>
        </>
    );

    return (
        <Article
            title='Публичная оферта'
            backLinkText='О компании / Публичная оферта'
            backLinkHref='/about-company'
            content={content}
        />
    );
};

export default PublicOffer;