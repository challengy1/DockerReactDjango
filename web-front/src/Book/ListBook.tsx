import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { Button, IconButton, Image, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

import { AppDispatch, RootState } from '../Store/store';
import { bookType } from './types';
import { loadBook, removeBook } from './bookDatabase';

export const ListBook: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector<RootState, bookType[]>((state) => state.book);

  const addNew = () => {
    dispatch(push(`/edit`));
  };

  const editEach = (item: bookType) => {
    if (item.id) {
      dispatch(push(`/edit?id=${item.id}`));
    }
  };

  const deleteEach = (item: bookType) => {
    if (item.id !== undefined) {
      void dispatch(removeBook(item.id));
    }
  };

  useEffect(() => {
    void dispatch(loadBook());
  }, [dispatch]);

  return (
    <div>
      <Button onClick={() => addNew()}>ADD A NEW BOOK</Button>
      <Table variant="simple" w="95%" mx="auto">
        <Thead>
          <Tr>
            <Th>IMAGE</Th>
            <Th>TITLE</Th>
            <Th>PUBLISHER</Th>
            <Th>AUTHOR</Th>
            <Th isNumeric>PRICE</Th>
            <Th>
              <EditIcon color="blue.500" boxSize="3em" />
            </Th>
            <Th>
              <DeleteIcon color="red.500" boxSize="3em" />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {books.length > 0 &&
            books.map((book) => (
              <Tr key={book.id}>
                <Td>
                  <Image boxSize="50px" src={book.image} atl="FaceImage" />
                </Td>
                <Td>{book.title}</Td>
                <Td>{book.publisher}</Td>
                <Td>{book.author}</Td>
                <Td isNumeric>{book.price}</Td>
                <Td>
                  <IconButton
                    onClick={() => editEach(book)}
                    aria-label="Edit"
                    icon={<EditIcon />}
                    colorScheme="blue"
                    size="sm"
                  />
                </Td>
                <Td>
                  <IconButton
                    onClick={() => deleteEach(book)}
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    size="sm"
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};
