import axios from 'axios';
import { AppDispatch } from '../Store/store';
import { bookPostType, bookPutType, bookType } from './types';
import { addBookAction, deleteBookAction, setBookAction, updateBookAction } from './actions';
import { setError } from '../Header/actions';

const baseUrl = 'http://192.168.0.11:8000/book/api/';

export const loadBook =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await axios({
        method: 'get',
        url: baseUrl,
      });
      if (response) {
        const bookList = response.data as bookType[];
        dispatch(setBookAction(bookList));
      }
    } catch {
      dispatch(setError({ message: 'データベースの読み込みに失敗しました' }));
    }
  };

export const storeBook =
  (book: bookPostType) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await axios({
        method: 'post',
        url: baseUrl,
        data: book,
      });
      if (response) {
        const responseData = response.data as bookType;
        dispatch(addBookAction(responseData));
      }
    } catch {
      dispatch(setError({ message: 'データベースの登録に失敗しました' }));
    }
  };

export const updateBook =
  (book: bookPutType) =>
  async (dispatch: AppDispatch): Promise<void> => {
    if (book.id) {
      const slug = book.id;
      const apiData = { ...book };
      delete apiData.id;
      try {
        const response = await axios({
          method: 'put',
          url: `${baseUrl + slug}/`,
          data: apiData,
        });
        if (response) {
          const responseData = response.data as bookType;
          dispatch(updateBookAction(responseData));
        }
      } catch {
        dispatch(setError({ message: 'データベースの更新に失敗しました' }));
      }
    }
  };

export const removeBook =
  (slug: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    if (slug) {
      try {
        const response = await axios({
          method: 'delete',
          url: `${baseUrl + slug}/`,
        });
        if (response) {
          dispatch(deleteBookAction(slug));
        }
      } catch {
        dispatch(setError({ message: 'データの削除に失敗しました' }));
      }
    }
  };
