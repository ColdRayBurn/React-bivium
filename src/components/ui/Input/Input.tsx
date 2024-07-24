import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, forwardedRef) => {
  const { className, ...rest } = props;
  return <input ref={forwardedRef} className={classNames(styles.control, className)} {...rest} />;
});

Input.displayName = 'Input';
export default Input;
