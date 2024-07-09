'use client';

import { FC, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { useFloating, autoUpdate, offset, useInteractions, useHover, useDismiss, useRole, FloatingFocusManager, safePolygon } from '@floating-ui/react';
import Link from 'next/link';
import styles from './HeaderNavigationItem.module.css';

import List from './List';

interface Subcategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[][];
};

interface Props {
  title: string;
  categories?: Category[];
};

const HeaderNavigationItem: FC<Props> = ({ title, categories }) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isExpanded, setExpanded] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isExpanded,
    onOpenChange: setExpanded,
    placement: 'bottom-start',
    middleware: [offset({ crossAxis: -65 })],
    whileElementsMounted: autoUpdate
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { handleClose: safePolygon() }),
    useRole(context)
  ]);

  if (categories === undefined) {
    return (
      <Link className={styles.navigationItem} href='#'>{title}</Link>
    );
  }

  if (categories) {
    return (
      <>
        <button
          ref={reference => {
            buttonRef.current = reference;
            refs.setReference(reference);
          }}
          {...getReferenceProps()}
          className={classNames(styles.navigationItem, isExpanded && styles.navigationItem_expanded)}
          type='button'
          onClick={() => router.push('/catalog')}
        >
          {title}
        </button>
        {isExpanded && (
          <FloatingFocusManager context={context} modal={false}>
            <List ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} categories={categories} />
          </FloatingFocusManager>
        )}
      </>
    );
  }
};

HeaderNavigationItem.displayName = 'HeaderNavigationItem';
export default HeaderNavigationItem;
