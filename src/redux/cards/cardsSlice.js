import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   items: [
      {
         id: "1lRI9nxJnZ",
         link: "",
         src: null,
         text: "",
         title: "1",
      },
      {
         id: "2-lRI9nxJnZ",
         link: "",
         src: null,
         text: "",
         title: "2",
      },
      {
         id: "2-3",
         link: "",
         src: null,
         text: "",
         title: "3",
      },
      {
         id: "2-4",
         link: "",
         src: null,
         text: "",
         title: "4",
      },
      {
         id: "2-5",
         link: "",
         src: null,
         text: "",
         title: "5",
      },
      {
         id: "2-6",
         link: "",
         src: null,
         text: "",
         title: "6",
      },
      {
         id: "2-7",
         link: "",
         src: null,
         text: "",
         title: "7",
      },
      {
         id: "2-8",
         link: "",
         src: null,
         text: "",
         title: "8",
      },
      {
         id: "2-9",
         link: "",
         src: null,
         text: "",
         title: "9",
      },
      {
         id: "2-10",
         link: "",
         src: null,
         text: "",
         title: "10",
      },
      {
         id: "1lRI9nxnZ",
         link: "",
         src: null,
         text: "",
         title: "11",
      },
      {
         id: "2-lRInxJnZ",
         link: "",
         src: null,
         text: "",
         title: "12",
      },
      {
         id: "2-73",
         link: "",
         src: null,
         text: "",
         title: "13",
      },
      {
         id: "2-47",
         link: "",
         src: null,
         text: "",
         title: "14",
      },
      {
         id: "2-75",
         link: "",
         src: null,
         text: "",
         title: "15",
      },
      {
         id: "2-76",
         link: "",
         src: null,
         text: "",
         title: "16",
      },
      {
         id: "27-7",
         link: "",
         src: null,
         text: "",
         title: "17",
      },
      {
         id: "52-8",
         link: "",
         src: null,
         text: "",
         title: "18",
      },
      {
         id: "2-93",
         link: "",
         src: null,
         text: "",
         title: "19",
      },
      {
         id: "2-510",
         link: "",
         src: null,
         text: "",
         title: "20",
      },
   ],
   deleteItems: [],
   fileDataURL: null,
};

export const cardsSlice = createSlice({
   name: 'cards',
   initialState,
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
         state.fileDataURL = actions.payload;
      },
      addCookieInRedux (state, actions) {
         state.items = actions.payload;
      },
   },
});

export const {add, remove, saveRemoveCard, setFileData, addCookieInRedux} = cardsSlice.actions;