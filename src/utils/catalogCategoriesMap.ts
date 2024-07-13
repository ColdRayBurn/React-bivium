export type CategoryCode =
  'wonmens-clothing' |
  'wonmens-ski' |
  'wonmens-running' |
  'mens-clothing' |
  'mens-ski' |
  'mens-running' |
  'childrens-clothing' |
  'childrens-ski' |
  'accessories';

export type CategoryName =
  'Женская одежда' | 'Женские лыжи' | 'Женский бег' |
  'Мужская одежда' | 'Мужские лыжи' | 'Мужской бег' |
  'Детская одежда' | 'Детские лыжи' | 'Акссесуары';

export const categoryMap: Record<CategoryCode, number> = {
  'wonmens-clothing': 24,
  'wonmens-ski': 26,
  'wonmens-running': 25,
  'mens-clothing': 21,
  'mens-ski': 23,
  'mens-running': 22,
  'childrens-clothing': 19,
  'childrens-ski': 20,
  'accessories': 18
};

export const categoriesNames: Record<CategoryCode, CategoryName> = {
  'wonmens-clothing': 'Женская одежда',
  'wonmens-ski': 'Женские лыжи',
  'wonmens-running': 'Женский бег',
  'mens-clothing': 'Мужская одежда',
  'mens-ski': 'Мужские лыжи',
  'mens-running': 'Мужской бег',
  'childrens-clothing': 'Детская одежда',
  'childrens-ski': 'Детские лыжи',
  'accessories': 'Акссесуары'
};

export const getCatalogCategoryCodeById = (id: number) => {
  return Object.keys(categoryMap).find(value => categoryMap[value as CategoryCode] === id) as CategoryCode ?? null;
};

export const getCatalogCategoryNameByCode = (code: CategoryCode) => {
  return categoriesNames[code];
};
