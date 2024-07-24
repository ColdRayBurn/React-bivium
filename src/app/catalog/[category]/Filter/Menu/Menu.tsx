'use client';

import { CSSProperties, HTMLProps, forwardRef, useState } from 'react';
import classNames from 'classnames';

import Accordion from './Accordion';
import PriceSlider from './PriceSlider';
import Button from '@/components/ui/Button/Button';

import CrossIcon from '@icons/cross.svg';

import useFilters from './useFilters';
import styles from './Menu.module.css';

interface Props {
  floatingStyles?: CSSProperties;
  getFloatingProps?: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>;
  onClose: () => void;
}

const Menu = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { floatingStyles, getFloatingProps, onClose } = props;

  const {
    filters,
    addCategory,
    removeCategory,
    addColor,
    removeColor,
    addSize,
    removeSize,
    setPrice,
    isAnyFiltersApplied
  } = useFilters();

  return (
    <div ref={ref} className={styles.wrapper} style={floatingStyles} {...(getFloatingProps && getFloatingProps())}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Фильтр (0)</div>
        <button className={styles.headerCloseButton} type='button' onClick={onClose}>
          <CrossIcon />
        </button>
      </div>
      {isAnyFiltersApplied() && (
        <div className={styles.filters}>
          {filters.categories.map((category, categoryIndex) => (
            <button
              key={categoryIndex}
              className={styles.filtersButton}
              type='button'
              onClick={() => removeCategory(category)}
            >
              <CrossIcon />
              {category.name}
            </button>
          ))}
          {filters.colors.map((color, colorIndex) => (
            <button key={colorIndex} className={styles.filtersButton} type='button' onClick={() => removeColor(color)}>
              <CrossIcon />
              <div className={styles.colorFiltersButton} style={{ backgroundColor: color.hex }}></div>
            </button>
          ))}
          {filters.sizes.map((size, sizeIndex) => (
            <button key={sizeIndex} className={styles.filtersButton} type='button' onClick={() => removeSize(size)}>
              <CrossIcon />
              {size}
            </button>
          ))}
        </div>
      )}
      <div className={styles.body}>
        <Accordion title='Категория'>
          <div className={classNames(styles.textFilters, styles.textFilters_column)}>
            <button
              className={styles.textFiltersButton}
              type='button'
              onClick={() => addCategory({ name: 'Для мужчин', value: 'male' })}
            >
              Для мужчин
            </button>
            <button
              className={styles.textFiltersButton}
              type='button'
              onClick={() => addCategory({ name: 'Для женщин', value: 'female' })}
            >
              Для женщин
            </button>
          </div>
        </Accordion>
        <Accordion title='Цвет'>
          <div className={styles.colorFilters}>
            <button
              className={styles.colorFiltersButton}
              type='button'
              style={{ backgroundColor: 'red' }}
              onClick={() => addColor({ code: 'КРАСНЫЙ', hex: 'red' })}
            ></button>
          </div>
        </Accordion>
        <Accordion title='Размер'>
          <div className={classNames(styles.textFilters, styles.textFilters_row)}>
            <button className={styles.textFiltersButton} type='button' onClick={() => addSize('L(188)')}>
              L(188)
            </button>
          </div>
        </Accordion>
        {/* <Accordion title='Цена'>
          <PriceSlider defaultValue={[0, 100_000]} onChange={setPrice} />
        </Accordion> */}
      </div>
      <Button className={styles.button} variant='negative' icon={false} type='button'>
        Применить
      </Button>
    </div>
  );
});

Menu.displayName = 'Menu';
export default Menu;
