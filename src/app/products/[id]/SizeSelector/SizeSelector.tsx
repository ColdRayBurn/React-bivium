'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './SizeSelector.module.css';

export type Size = {
  id: number;
  name: string;
  isDefaultSelected?: boolean;
  isDisabled?: boolean;
};

interface Props {
  sizes: [Size, ...Size[]];
  onSelect?: (id: number) => void;
}

const SizeSelector: FC<Props> = ({ sizes, onSelect }) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(
    sizes.find(size => size.isDefaultSelected && !size.isDisabled)?.id ?? null
  );

  return (
    <div className={styles.wrapper}>
      {sizes.map((size, sizeIndex) => (
        <button
          key={sizeIndex}
          className={classNames(styles.button, selectedSize === size.id && styles.selected)}
          disabled={size.isDisabled}
          type='button'
          onClick={() => {
            setSelectedSize(size.id);
            typeof onSelect === 'function' && onSelect(size.id);
          }}
        >
          {size.name.replace(/\(.+\)$/, '')}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
