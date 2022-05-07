import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    products: builder.query({
      query: () => '/products?limit=5',
    }),
  }),
});

export const { useProductsQuery } = productsApi;
