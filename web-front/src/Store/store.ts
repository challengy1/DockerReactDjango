import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { BookReducer } from '../Book/reducers';
import { ErrorReducer } from '../Header/reducers';

export const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  book: BookReducer,
  error: ErrorReducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history));
  },
});

export const { dispatch } = store;
export type AppDispatch = typeof dispatch;
