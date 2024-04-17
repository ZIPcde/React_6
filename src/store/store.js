// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});