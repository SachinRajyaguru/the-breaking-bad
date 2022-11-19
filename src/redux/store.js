import {configureStore} from '@reduxjs/toolkit';
import characterReducer from './slices/slice-characters';

const store = configureStore({
  reducer: {
    characterReducer: characterReducer,
  },
});

export default store;
