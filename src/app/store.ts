import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [reduxBatch],

  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware();

    if (process.env.NODE_ENV !== 'production') {
      return middleware.concat(logger);
    }

    return middleware;
  },

  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
