'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './ColorPicker.module.css';

interface Props {
  colors: [string, ...string[]];
  onSelect: (color: string) => void;
  className?: string;
}

const ColorPicker: FC<Props> = ({ colors, onSelect, className }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className={classNames(className, styles.wrapper)}>
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

export default ColorPicker;
