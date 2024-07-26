import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Filter {
  isApplied: boolean;
}

interface CategoryFilter extends Filter {
  id: number;
  name: string;
}

interface ColorFilter extends Filter {
  code: string;
  hex: string;
}

interface SizeFilter extends Filter {
  name: string;
}

interface Filters {
  categories: CategoryFilter[];
  colors: ColorFilter[];
  sizes: SizeFilter[];
}

const initialState: Filters = {
  categories: [],
  colors: [],
  sizes: []
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryFilter>) => {
      const categoryIndex = state.categories.findIndex(category => category.id === action.payload.id);
      categoryIndex === -1 && state.categories.push(action.payload);
    },
    addColor: (state, action: PayloadAction<ColorFilter>) => {
      const colorIndex = state.colors.findIndex(color => color.code === action.payload.code);
      colorIndex === -1 && state.colors.push(action.payload);
    },
    addSize: (state, action: PayloadAction<SizeFilter>) => {
      const sizeIndex = state.sizes.findIndex(size => size.name === action.payload.name);
      sizeIndex === -1 && state.sizes.push(action.payload);
    },
    applyCategoryFilter: (state, action: PayloadAction<CategoryFilter & { state: boolean }>) => {
      const categoryIndex = state.categories.findIndex(category => category.id === action.payload.id);
      categoryIndex !== -1 && (state.categories[categoryIndex].isApplied = action.payload.state);
    },
    applyColorFilter: (state, action: PayloadAction<ColorFilter & { state: boolean }>) => {
      const colorIndex = state.colors.findIndex(color => color.code === action.payload.code);
      colorIndex !== -1 && (state.colors[colorIndex].isApplied = action.payload.state);
    },
    applySizeFilter: (state, action: PayloadAction<SizeFilter & { state: boolean }>) => {
      const sizeIndex = state.sizes.findIndex(size => size.name === action.payload.name);
      sizeIndex !== -1 && (state.sizes[sizeIndex].isApplied = action.payload.state);
    }
  }
});

export const { addCategory, addColor, addSize, applyCategoryFilter, applyColorFilter, applySizeFilter } =
  filtersSlice.actions;

export default filtersSlice;
