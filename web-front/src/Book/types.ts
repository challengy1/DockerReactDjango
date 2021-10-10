export type bookType = {
    id: string;
    title: string;
    image: string;
    file: string;
    publisher: string;
    author: string;
    price: number;
    description: string;
    publishDate: string;
  };
  
  export const initialBook = {
    id: '',
    title: '',
    image: '',
    file: '',
    publisher: '',
    author: '',
    price: 0,
    description: '',
    publishDate: '',
  };
  
  export type bookPostType = {
    title: string;
    image: string;
    file: string;
    publisher: string;
    author: string;
    price: number;
    description: string;
    publishDate: string;
  };
  
  export type bookPutType = {
    id?: string;
    title: string;
    image?: string;
    file?: string;
    publisher: string;
    author: string;
    price: number;
    description: string;
    publishDate: string;
  };
  