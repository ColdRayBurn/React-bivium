import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '@/api';
import { ICartResponse } from '@/api/models';

interface ICartProduct {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
  amount: number;
  productId: number;
}

interface Cart {
  products: ICartProduct[];
}

const fetch = createAsyncThunk('cart/fetch', async () => {
  const response = await api.get('cart/').json<ICartResponse>();
  return response.items ?? [];
});

const put = createAsyncThunk('cart/put', async (item: ICartProduct) => {
  const response = await api.put(`cart/${item.id}/`).json<{ amountLeft: number }>();
  return response;
});

const replace = createAsyncThunk(
  'cart/replace',
  async ({
    previousId,
    newId,
    quantity
  }: {
    previousId: number;
    newId: number;
    quantity: number;
    sizeName: string;
  }) => {
    await api.post('cart/change-size/', { json: { previousId, newId, quantity } });
  }
);

const remove = createAsyncThunk('cart/remove', async ({ id, all }: { id: number; all?: boolean }) => {
  const response = await api
    .delete(`cart/${id}/`, {
      searchParams: {
        ...(all && { all: '' })
      }
    })
    .json<{ amountLeft: number }>();

  return response;
});

const initialState: Cart = {
  products: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartClear: () => initialState
  },
  extraReducers: builder => {
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(put.pending, (state, action) => {
      const productIndex = state.products.findIndex(item => item.id === action.meta.arg.id);
      productIndex === -1 ? state.products.push(action.meta.arg) : state.products[productIndex].amount++;
    });

    builder.addCase(put.fulfilled, (state, action) => {
      const productIndex = state.products.findIndex(item => item.id === action.meta.arg.id);

      productIndex === -1
        ? state.products.push(action.meta.arg)
        : (state.products[productIndex].amount = action.payload.amountLeft);
    });

    builder.addCase(remove.pending, (state, action) => {
      const productIndex = state.products.findIndex(item => item.id === action.meta.arg.id);

      if (productIndex === -1) {
        return;
      }

      if (action.meta.arg.all) {
        state.products = state.products.filter(item => item.id !== action.meta.arg.id);
      } else {
        state.products[productIndex].amount--;
      }
    });

    builder.addMatcher(replace.settled, (state, action) => {
      const productIndex = state.products.findIndex(product => product.id);
      state.products[productIndex].id = action.meta.arg.newId;
      state.products[productIndex].amount = action.meta.arg.quantity;
      state.products[productIndex].size = action.meta.arg.sizeName;
    });

    // builder.addMatcher(fetch.settled, (state, action) => {
    //   if (action.meta.requestStatus === 'fulfilled') {
    //     const fetchedItems = action.payload as ICartProduct[];
    //     const cartItems = state.products;
    //     const filteredItems = cartItems.filter(item => !fetchedItems.map(item => item.id).includes(item.id));
    //     state.products = [...filteredItems, ...fetchedItems];
    //   }
    // });
  }
});

export { fetch as cartFetch, put as cartPut, remove as cartRemove, replace as cartReplace };
export const { cartClear } = cartSlice.actions;
export default cartSlice;
