import {createSlice} from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
   name: 'cards',
   initialState: {
      items: [],
      deleteItems: [],
      fileDataURL: null,
   },
   reducers: {
      add (state, actions) {
         state.items.unshift(actions.payload);
      },
      remove (state, actions) {
         state.items = actions.payload;
      },
      saveRemoveCard (state, actions) {
         state.deleteItems.push(actions.payload);
      },
      setFileData (state, actions) {
            state.fileDataURL = actions.payload
      },
   },
});

export const {add, remove, saveRemoveCard, setFileData} = cardsSlice.actions;