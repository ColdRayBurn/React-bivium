'use client';

import { FC, useState, useRef } from 'react';
import styles from './NumberInput.module.css';

import MinusIcon from '@icons/minus.svg';
import PlusIcon from '@icons/plus.svg';

interface Props {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onChangeCallback: (previousValue: number, value: number) => void;
}

const NumberInput: FC<Props> = ({ defaultValue = 0, step = 1, min = -Infinity, max = Infinity, onChangeCallback }) => {
  const [number, setNumber] = useState(defaultValue);
  const previousValueRef = useRef<number>(defaultValue);
  let inputRef = useRef<HTMLInputElement>(null);

  const minus = () => {
    previousValueRef.current = number;
    onChangeCallback && onChangeCallback(previousValueRef.current, number - step >= min ? number - step : number);

    setNumber(number => {
      const result = number - step >= min ? number - step : number;
      inputRef.current!.valueAsNumber = result;
      return result;
    });
  };

  const plus = () => {
    previousValueRef.current = number;
    onChangeCallback && onChangeCallback(previousValueRef.current, number + step <= max ? number + step : number);

    setNumber(number => {
      const result = number + step <= max ? number + step : number;
      inputRef.current!.valueAsNumber = result;
      return result;
    });
  };

  const onBlurHandler = () => {
    const input = inputRef.current!;
    const value = parseInt(input.value);

    if (isNaN(value)) {
      input.valueAsNumber = number;
    } else {
      previousValueRef.current = number;
      setNumber(value);
      onChangeCallback && onChangeCallback(previousValueRef.current, number);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type='button' onClick={minus}>
        <MinusIcon />
      </button>
      <input ref={inputRef} className={styles.input} type='number' defaultValue={number} onBlur={onBlurHandler} />
      <button className={styles.button} type='button' onClick={plus}>
        <PlusIcon />
      </button>
    </div>
  );
};

NumberInput.displayName = 'NumberInput';
export default NumberInput;
