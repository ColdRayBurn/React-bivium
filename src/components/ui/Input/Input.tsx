import { ComponentProps, forwardRef } from 'react';
import { InputMask, InputMaskProps } from '@react-input/mask';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'> & InputMaskProps>((props, forwardedRef) => {
  const { className, mask, ...rest } = props;
  delete rest['ref'];

  return mask !== undefined ? (
    <InputMask ref={forwardedRef} className={classNames(styles.control, className)} mask={mask} {...rest} />
  ) : (
    <input ref={forwardedRef} className={classNames(styles.control, className)} {...rest} />
  );
});

Input.displayName = 'Input';
export default Input;
