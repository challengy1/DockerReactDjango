import React, { FC } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

type DialogPropsType = {
  message: string;
  isOpen: boolean;
  doClose: () => void;
};

export const MessageDialog: FC<DialogPropsType> = (props) => {
  const { message, isOpen, doClose } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={doClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error Message Dialog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{message}</p>
          </ModalBody>
        </ModalContent>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={doClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
