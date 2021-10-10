import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../Store/initialState';
import { bookType } from './types';
import {
  setBookAction,
  addBookAction,
  updateBookAction,
  deleteBookAction,
  clearBookAction,
  addManyBookAction,
} from './actions';

export const BookReducer = createReducer(initialState.book, {
  [setBookAction.type]: (state: bookType[], action: PayloadAction<bookType[]>) => [...action.payload],
  [addBookAction.type]: (state: bookType[], action: PayloadAction<bookType>) => [...state, action.payload],
  [updateBookAction.type]: (state: bookType[], action: PayloadAction<bookType>) => [
    ...state.filter((item) => item.id !== action.payload.id),
    action.payload,
  ],
  [deleteBookAction.type]: (state: bookType[], action: PayloadAction<string>) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
  [clearBookAction.type]: () => [],
  [addManyBookAction.type]: (state: bookType[], action: PayloadAction<bookType[]>) => [...state, ...action.payload],
});
