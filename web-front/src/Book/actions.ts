import { createAction } from '@reduxjs/toolkit';
import { bookType } from './types';

export const setBookAction = createAction<bookType[]>('Book/setBook');
export const addBookAction = createAction<bookType>('Book/addBook');
export const updateBookAction = createAction<bookType>('Book/updateBook');
export const deleteBookAction = createAction<string>('Book/deleteBook');
export const clearBookAction = createAction('Book/clearBook');
export const addManyBookAction = createAction<bookType[]>('Book/addManyBook');
