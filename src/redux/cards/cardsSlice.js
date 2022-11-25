import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {value: 0},
   reducers: {
      increment (state, action) {
         state.value += action.payload;
      },
      decrement (state, action) {
         state.value -= action.payload;
      },
   },
});

const counterConfig = {
   key: 'counter',
   storage,
};

export const counterReducer = persistReducer(counterConfig, counterSlice.reducer);

export const {} = counterSlice.actions;