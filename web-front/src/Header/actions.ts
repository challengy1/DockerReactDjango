import { createAction } from '@reduxjs/toolkit';
import { ErrorType } from './types';

export const setError = createAction<ErrorType>('Header/setError');
export const resetError = createAction('Header/resetError');
