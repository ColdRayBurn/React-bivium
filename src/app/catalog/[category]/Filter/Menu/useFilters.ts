import { useState } from 'react';

interface Category {
  name: string;
  value: string;
}

interface Color {
  hex: string;
  code: string;
}

type Price = [min: number, max: number] | null;

interface Filters {
  categories: Category[];
  colors: Color[];
  sizes: string[];
  price: Price;
}

const useFilters = (initialState?: Filters) => {
  const [filters, setFilters] = useState<Filters>(
    initialState || {
      categories: [],
      colors: [],
      sizes: [],
      price: null
    }
  );

  const addCategory = (category: Category) => {
    if (filters.categories.find(item => item.value === category.value) === undefined) {
      setFilters(filters => ({ ...filters, categories: [...filters.categories, category] }));
    }
  };

  const removeCategory = (category: Category) => {
    setFilters(filters => ({
      ...filters,
      categories: [...filters.categories.filter(item => item.value !== category.value)]
    }));
  };

  const addColor = (color: Color) => {
    if (filters.colors.find(item => item.code === color.code) === undefined) {
      setFilters(filters => ({ ...filters, colors: [...filters.colors, color] }));
    }
  };

  const removeColor = (color: Color) => {
    setFilters(filters => ({
      ...filters,
      colors: [...filters.colors.filter(item => item.code !== color.code)]
    }));
  };

  const addSize = (size: string) => {
    if (filters.sizes.find(item => item === size) === undefined) {
      setFilters(filters => ({ ...filters, sizes: [...filters.sizes, size] }));
    }
  };

  const removeSize = (size: string) => {
    setFilters(filters => ({
      ...filters,
      sizes: [...filters.sizes.filter(item => item !== size)]
    }));
  };

  const setPrice = (price: Price) => {
    setFilters(filters => ({ ...filters, price }));
  };

  const isAnyFiltersApplied = () => {
    return !![...filters.categories, ...filters.colors, ...filters.sizes].length;
  };

  return {
    filters,
    addCategory,
    removeCategory,
    addColor,
    removeColor,
    addSize,
    removeSize,
    setPrice,
    isAnyFiltersApplied
  };
};

export default useFilters;
