import { forwardRef, CSSProperties, useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import ChevronRightIcon from '@icons/chevron-right.svg';
import styles from './List.module.css';

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
  style: CSSProperties;
  categories: Category[];
}

const List = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { categories } = props;
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div ref={ref} className={styles.wrapper} {...props}>
      <div className={styles.categories}>
        {categories.map(category => (
          <Link
            key={category.id}
            className={classNames(styles.category, activeCategory?.id === category.id && styles.category_active)}
            onMouseEnter={() => setActiveCategory(category)}
            href='#'
          >
            <div>{category.name}</div>
            <ChevronRightIcon />
          </Link>
        ))}
      </div>
      {!!activeCategory && activeCategory.subcategories.map((subcategories, subcategoriesIndex) => (
        <div key={subcategoriesIndex} className={styles.subcategory}>
          {subcategories.map(subcategory => <Link key={subcategory.id} className={styles.subcategoryItem} href='#'>{subcategory.name}</Link>)}
        </div>
      ))}
    </div>
  );
});

List.displayName = 'List';
export default List;
