import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setError, resetError } from './actions';
import { initialState } from '../Store/initialState';
import { ErrorType } from './types';

export const ErrorReducer = createReducer(initialState.error, {
  [setError.type]: (state: ErrorType, action: PayloadAction<ErrorType>) => ({ ...state, ...action.payload }),
  [resetError.type]: () => initialState.error,
});
