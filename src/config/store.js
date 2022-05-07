import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import productReducer, { productsFetch } from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';

import storage from 'redux-persist/lib/storage';

import { productsApi } from './apiCalls';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducers = combineReducers({
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: {
    product: productReducer,
    persistedReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

store.dispatch(productsFetch());

export const persistor = persistStore(store);
export default store;
