import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { VStack, HStack, Input, Button, Box, Textarea, FormControl, FormLabel } from '@chakra-ui/react';

import { storeBook, updateBook } from './bookDatabase';
import { EditImage } from './EditImage';
import { AppDispatch, RootState } from '../Store/store';
import { bookType, bookPostType, bookPutType, initialBook } from './types';

type InputFormType = {
  title: string;
  publisher: string;
  author: string;
  price: number;
  description: string;
  publishDate: string;
};

export const BookEdit: FC = () => {
  const [nameFile, setNameFile] = useState('');
  const [imageData, setImageData] = useState('');
  const [isImageChanged, setIsImageChanged] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector<RootState, bookType[]>((state) => state.book);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id') ?? '';
  const book = (id !== '' ? books.find((item) => item.id === id) : initialBook) ?? initialBook;

  useEffect(() => {
    setNameFile(book.file);
    setImageData(book.image);
  }, [book]);

  useEffect(() => {
    reset({
      title: book.title,
      publisher: book.publisher,
      author: book.author,
      price: book.price,
      description: book.description,
      publishDate: book.publishDate,
    });
  }, [book, reset]);

  const handleInput = (formData: InputFormType): void => {
    if (book.id === '') {
      const newBook: bookPostType = {
        title: formData.title,
        image: imageData,
        file: nameFile,
        publisher: formData.publisher,
        author: formData.author,
        price: formData.price,
        description: formData.description,
        publishDate: formData.publishDate,
      };
      void dispatch(storeBook(newBook));
    } else {
      const modifiedBook: bookPutType = {
        id: book.id,
        title: formData.title,
        publisher: formData.publisher,
        author: formData.author,
        price: formData.price,
        description: formData.description,
        publishDate: formData.publishDate,
      };
      if (isImageChanged) {
        modifiedBook.image = imageData;
        modifiedBook.file = nameFile;
      }
      void dispatch(updateBook(modifiedBook));
    }
    dispatch(push('/'));
  };

  const handleCancel = () => {
    dispatch(push('/'));
  };

  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  return (
    <Box w="80%" mx="auto" my="5px">
      <EditImage
        nameFile={nameFile}
        setNameFile={setNameFile}
        imageData={imageData}
        setImageData={setImageData}
        setIsImageChanged={setIsImageChanged}
      />
      <VStack>
        <form onSubmit={handleSubmit(handleInput)}>
          <FormControl w="500px" my="5px" id="title" isRequired isInvalid={errors.title}>
            <FormLabel mb="0" htmlFor="title">
              タイトル
            </FormLabel>
            <Input
              size="sm"
              id="title"
              type="text"
              placeholder="Title"
              {...register('title', { required: 'This is required' })}
            />
          </FormControl>

          <FormControl my="5px" id="publisher" isRequired isInvalid={errors.publisher}>
            <FormLabel mb="0" htmlFor="publisher">
              出版社
            </FormLabel>
            <Input
              size="sm"
              id="publisher"
              type="text"
              placeholder="Publisher"
              {...register('publisher', { required: 'This is required' })}
            />
          </FormControl>

          <FormControl my="5px" id="author" isRequired isInvalid={errors.author}>
            <FormLabel mb="0" htmlFor="author">
              著者
            </FormLabel>
            <Input
              size="sm"
              id="author"
              type="text"
              placeholder="Author"
              {...register('author', { required: 'This is required' })}
            />
          </FormControl>

          <FormControl my="5px" id="price" isRequired isInvalid={errors.price}>
            <FormLabel mb="0" htmlFor="price">
              価格
            </FormLabel>
            <Input
              size="sm"
              id="price"
              type="text"
              placeholder="Price"
              {...register('price', { required: 'This is required' })}
            />
          </FormControl>

          <FormControl my="5px" id="description" isRequired isInvalid={errors.description}>
            <FormLabel mb="0" htmlFor="description">
              紹介
            </FormLabel>
            <Textarea
              size="sm"
              id="description"
              type="text"
              {...register('description', { required: 'This is required' })}
            />
          </FormControl>

          <FormControl my="5px" id="publishDate" isRequired isInvalid={errors.publishDate}>
            <FormLabel mb="0" htmlFor="publishDate">
              発行日
            </FormLabel>
            <Input
              size="sm"
              id="publishDate"
              type="text"
              placeholder="PublishDate"
              {...register('publishDate', { required: 'This is required' })}
            />
          </FormControl>
          <HStack>
            <Button type="submit" bg="cyan.600" _hover={{ bg: 'cyan.200' }} variant="ghost">
              Submit
            </Button>
            <Button onClick={handleCancel}>CANCEL</Button>
          </HStack>
        </form>
      </VStack>
    </Box>
  );
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
