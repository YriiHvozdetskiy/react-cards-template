import {configureStore} from '@reduxjs/toolkit';

import {
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import {counterReducer} from './cards/cardsSlice';

export const store = configureStore({
   reducer: {
      counter:counterReducer

   },
   middleware (getDefaultMiddleware) {
      return getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      });
   },
});

export const persistor = persistStore(store);