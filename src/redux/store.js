import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './features/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
  },
});

export default store;
