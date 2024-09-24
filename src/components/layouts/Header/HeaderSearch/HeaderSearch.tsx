'use client';

import { FC, useRef, useState } from 'react';
import styles from './HeaderSearch.module.css';
import classnames from 'classnames';

import SearchIcon from '@icons/search.svg';

interface Props {
  isHomePage: boolean;
  isScrolled: boolean;
  onSubmit: (query: string) => void;
}

const HeaderSearch: FC<Props> = ({ onSubmit, isScrolled, isHomePage }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isExpanded, setExpanded] = useState(false);

  const onSubmitHandler = () => {
    const input = inputRef.current!;

    if (input.value.length) {
      onSubmit(input.value);
      input.value = '';
      setExpanded(false);
    } else {
      setExpanded((isExpanded) => !isExpanded);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        className={classnames(
          styles.control,
          isExpanded && styles.control_expanded,
          isHomePage && !isScrolled && styles.controlWhiteBorder,
        )}
        type="search"
        placeholder="Поиск по товарам"
        onKeyUp={(event) => event.key === 'Enter' && onSubmitHandler()}
      />
      <button className={styles.button} type="button" onClick={onSubmitHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default HeaderSearch;
