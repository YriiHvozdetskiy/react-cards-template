import {createSlice} from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
   name: 'cards',
   initialState: {
      items: [],
   },
   reducers: {
      add (state, actions) {
         state.items.unshift(actions.payload);
      },
      remove (state, actions) {
         state.items = actions.payload;
      },
   },
});

export const {add, remove} = cardsSlice.actions;