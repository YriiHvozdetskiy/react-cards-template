import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './cards/cardsSlice';

export const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
   },
});

