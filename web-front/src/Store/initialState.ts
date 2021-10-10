import { bookType } from '../Book/types';
import { ErrorType } from '../Header/types';

export type storeState = {
  book: bookType[];
  error: ErrorType;
};

export const initialState: storeState = {
  book: [],
  error: {
    message: '',
  },
};
