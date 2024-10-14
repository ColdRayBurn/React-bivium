'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './ColorSelector.module.css';

interface Props {
  colors: [string, ...string[]];
  onSelect: (color: string) => void;
  size: 'sm' | 'md';
  className?: string;
}

const ColorSelector: FC<Props> = ({ colors, size, onSelect, className }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div
      className={classNames(className, styles.wrapper, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md'
      })}
    >
      {colors.map((color, colorIndex) => (
        <button
          key={colorIndex}
          className={classNames(styles.color, { [styles.selected]: selectedColor === color })}
          type='button'
          style={{ '--color-background': color }}
          onClick={() => {
            setSelectedColor(color);
            onSelect(color);
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorSelector;
