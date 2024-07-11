export const categoryMap: Record<string, number> = {
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

export const getCatalogCategoryNameById = (id: number) => {
  return Object.keys(categoryMap).find(value => categoryMap[value] === id) ?? null;
};
