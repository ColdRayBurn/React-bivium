import { FC } from 'react';
import styles from './Description.module.css';

const Description: FC = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Описание</h2>
      <div className={styles.text}>
        Универсальная легкая и теплая шапка для тренировок на беговых лыжах и других видов физической активности. Изготовлена из термобифлекса, который хорошо впитывает влагу и быстро сохнет при намокании. Облегающий крой, обеспечивает плотную посадку изделия. Тонкие, прочные и эластичные швы не натирают кожу и не вызывают раздражения.
        <br />
        <br />
        Особенности:
        <br />
        <br />
        Термобифлекс<br />
        Термопринт в виде фирменного товарного знака
      </div>
    </section>
  );
};

export default Description;
