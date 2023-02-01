import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { listenerMiddleware } from './listenerMiddleware';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
