import { createListenerMiddleware } from '@reduxjs/toolkit';
import { listeners } from './listeners';

export const listenerMiddleware = createListenerMiddleware();

listeners.forEach((listener) => {
  listenerMiddleware.startListening(listener);
});
