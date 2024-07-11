'use client';

import { FC } from 'react';
import styles from './SizeSelector.module.css';

interface Props {
  sizes: Size[];
  onChangeCallback?: (size: Size) => void;
};

const SizeSelector: FC<Props> = ({ sizes, onChangeCallback }) => {
  return (
    <div className={styles.wrapper}>
      {sizes.map((size, sizeIndex) =>
        <label key={sizeIndex} className={styles.sizeButton}>
          <input
            type="radio" name='size'
            value={size.value} defaultChecked={size.checked}
            onChange={() => !!onChangeCallback && onChangeCallback(size)}
          />
          {size.name}
        </label>
      )}
    </div>
  );
};

export default SizeSelector;
