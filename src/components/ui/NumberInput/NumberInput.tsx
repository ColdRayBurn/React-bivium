'use client';

import { FC, useState, useRef, useEffect } from 'react';
import styles from './NumberInput.module.css';

import MinusIcon from '@icons/minus.svg';
import PlusIcon from '@icons/plus.svg';

interface Props {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onChangeCallback?: (value: number) => void;
}

const NumberInput: FC<Props> = ({ defaultValue = 0, step = 1, min = -Infinity, max = Infinity, onChangeCallback }) => {
  const [number, setNumber] = useState(defaultValue);
  let inputRef = useRef<HTMLInputElement | null>(null);

  const minus = () => {
    setNumber(number => (number - step >= min ? number - step : number));
    inputRef.current && (inputRef.current.valueAsNumber = number);
  };

  const plus = () => {
    setNumber(number => (number + step <= max ? number + step : number));
    inputRef.current && (inputRef.current.valueAsNumber = number);
  };

  useEffect(() => {
    onChangeCallback && onChangeCallback(number);
  }, [number, onChangeCallback]);

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type='button' onClick={minus}>
        <MinusIcon />
      </button>
      <input ref={inputRef} className={styles.input} type='number' defaultValue={number} />
      <button className={styles.button} type='button' onClick={plus}>
        <PlusIcon />
      </button>
    </div>
  );
};

NumberInput.displayName = 'NumberInput';
export default NumberInput;
