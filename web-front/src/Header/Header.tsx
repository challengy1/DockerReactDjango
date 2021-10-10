import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { Box, Avatar } from '@chakra-ui/react';

import { AppDispatch, RootState } from '../Store/store';
import { resetError } from './actions';
import { ErrorType } from './types';
import { MessageDialog } from './MessageDialog';

import Logo from '../Images/me.jpg';

export const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState<boolean>(false);
  const errorSelector = (state: RootState) => state.error;
  const getErrorMessage = createSelector([errorSelector], (state: ErrorType) => state.message);
  const selector = useSelector<RootState, RootState>((state) => state);
  const message = getErrorMessage(selector);

  useEffect(() => {
    if (message !== '') {
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => {
    dispatch(resetError());
    setOpen(false);
  };

  return (
    <Box h="50px" bg="blue.200">
      <MessageDialog message={message} isOpen={open} doClose={() => handleClose()} />
      <Avatar size="md" name="Challengy" src={Logo} />{' '}
    </Box>
  );
};
