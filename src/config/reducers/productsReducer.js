import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productAxios } from '../axios';

const initialState = {
  products: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await productAxios.get();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = 'peding';
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default productsSlice.reducer;
