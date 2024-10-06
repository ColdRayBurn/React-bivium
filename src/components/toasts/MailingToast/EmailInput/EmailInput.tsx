'use client';

import { FC, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './EmailInput.module.css';

import ThinCrossIcon from '@icons/thin-cross.svg';
import ThinCheckmarkIcon from '@icons/thin-checkmark.svg';

interface Props {
  onValid: (value: string) => void;
  onInvalid: (value: string) => void;
  defaultValue?: string;
}

const EmailInput: FC<Props> = ({ onValid, onInvalid, defaultValue }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const input = inputRef.current!;

    if (!!input.value.length && input.checkValidity()) {
      onValid(input.value);
      setIsValid(true);
    } else {
      onInvalid(input.value);
      setIsValid(false);
    }

    const onInputHandler = () => {
      if (!!input.value.length && input.checkValidity()) {
        onValid(input.value);
        setIsValid(true);
      } else {
        onInvalid(input.value);
        setIsValid(false);
      }
    };

    input.addEventListener('input', onInputHandler);
    return () => input.removeEventListener('input', onInputHandler);
  }, [onValid, onInvalid]);

  return (
    <label
      className={classNames(styles.wrapper, {
        [styles.valid]: isValid,
        [styles.invalid]: !isValid
      })}
    >
      <div className={styles.title}>E-Mail</div>
      <div className={styles.inputWrapper}>
        <input ref={inputRef} className={styles.control} type='email' defaultValue={defaultValue} />
        {isValid ? <ThinCheckmarkIcon className={styles.icon} /> : <ThinCrossIcon className={styles.icon} />}
      </div>
    </label>
  );
};

export default EmailInput;
