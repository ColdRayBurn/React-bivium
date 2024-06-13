'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './PromocodeInput.module.css';

import CheckIcon from '@/assets/icons/checkmark.svg';

interface Props {
  className?: string;
}

const PromocodeInput: FC<Props> = ({ className }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className={classNames(className, styles.wrapper)}>
      <input className={styles.input} type='text' placeholder='Промокод' disabled={isSubmited} onChange={event => setValue(event.target.value)} />
      {!isSubmited && <button className={styles.submitButton} type='button' disabled={!value.length} onClick={() => setIsSubmited(true)}>Применить</button>}
      {isSubmited && (
        <>
          <div className={styles.discount}>-15%</div>
          <CheckIcon />
        </>
      )}
    </div>
  );
};

export default PromocodeInput;
