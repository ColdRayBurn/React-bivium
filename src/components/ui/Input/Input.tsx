import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, forwardedRef) => {
  const { ref, className, ...rest } = props;
  return <input ref={forwardedRef} className={classNames(className, styles.control)} {...rest} />;
});


Input.displayName = 'Input';
export default Input;
