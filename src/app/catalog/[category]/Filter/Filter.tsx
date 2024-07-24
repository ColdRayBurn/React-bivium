'use client';

import { FC, useState } from 'react';
import {
  useFloating,
  useInteractions,
  autoUpdate,
  offset,
  useClick,
  useDismiss,
  useRole,
  FloatingFocusManager
} from '@floating-ui/react';

import Menu from './Menu/Menu';
import FilterIcon from '@icons/filter.svg';

import styles from './Filter.module.css';

const Filter: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset({ mainAxis: -50 })],
    placement: 'bottom',
    whileElementsMounted: autoUpdate
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context)
  ]);

  return (
    <>
      <button ref={refs.setReference} className={styles.button} type='button' {...getReferenceProps()}>
        <FilterIcon />
        Фильтр (0)
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <Menu
            ref={refs.setFloating}
            floatingStyles={floatingStyles}
            getFloatingProps={getFloatingProps}
            onClose={() => setIsOpen(false)}
          />
        </FloatingFocusManager>
      )}
    </>
  );
};

export default Filter;
