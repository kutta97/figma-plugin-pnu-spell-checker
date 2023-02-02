import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './listenerMiddleware';
import { reducers } from './reducers';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
