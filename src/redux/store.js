import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './features/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
  },
});

export default store;
