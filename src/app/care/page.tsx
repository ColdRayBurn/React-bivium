import { FC } from 'react';
import Article from '@/components/Article/Article';
import styles from './page.module.css';

const Page: FC = () => {
  return <Article breadсrumbs={[{ name: 'Помощь', path: '/help' }, { name: 'Знаки и правила ухода за товарами', path: '/care' }]} title='Знаки и правила ухода за товарами' content={
    <>
      <img className={styles.image} src='/images/care.png' alt='' />
      <div>
        Чтобы вещи дольше сохраняли первоначальный вид, выглядели хорошо даже после множества стирок нужно за ней правильно ухаживать. Выбор спортивной одежды – это только полдела, поэтому несколько рекомендаций от наших технологов по уходу:
        <br />
        <br />
        Основные рекомендации по уходу за спортивной одеждой
        Перед стиркой, как бы это не было очевидно, нужно прочитать то, что написано на этикетке. Производители очень часто оставляют точные указания по уходу за одеждой. Это делается для того, чтобы изделие дольше сохраняли цвет и основные свойства ткани. Ну и конечно, проверить карманы, застегнуть все молнии и липкие застежки.
        Спортивную одежду, как правило запрещено отбеливать и использовать прочие аналогичные средства. При стирке не желательно пользоваться кондиционерами и другими подобными средствами. Все потому, что спортивная одежда зачастую обрабатывается специальными составами, которые обеспечивают защиту от ультрафиолетовых лучей. Со временем следы этой обработки исчезнут, но ускорять этот процесс при помощи дополнительных средств незачем. Более того, использование этих средств негативно влияет на эластичные свойства ткани.
        Если костюм изготовлен из высокотехнологичных материалов, то лучше стирать в холодной воде. При высокой температуре структура ткани таких вещей склонна разрушаться, и поэтому быстрее теряют свои качества.
        Более предпочтительной программой для стирки – это деликатная стирка. Стандартный режим негативно влияет на эластичность и свойства материалов, и также приводит к быстрому износу.
        В идеале сушить спортивную одежду нужно в прохладном месте с низким содержанием влажности в воздухе. Горячий воздух вредит в особенности тянущимся тканям: они теряют эластичность и со временем начинают сыпаться и линять.
        При глажке спортивной одежды оптимальным режимом на утюге будут: минимальный или умеренный. Обычно, режим выбирается согласно типу материала, который указан на этикетке изделия. Некоторые ткани из которых изготавливается одежда для занятий спортом, как например эластан, спандекс или лайкра, лучше вообще не гладить. Эти ткани отличаться повышенными показателями эластичности, и при воздействии на них высокой температуры могут подвергнуть деформации.

      </div>
    </>
  } />;
};

export default Page;
