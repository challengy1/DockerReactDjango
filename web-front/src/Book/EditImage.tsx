import React, { FC, useCallback, Dispatch, SetStateAction } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Image, Text, HStack } from '@chakra-ui/react';
import NoImage from '../Images/noimage.jpg';

type Props = {
  nameFile: string;
  setNameFile: Dispatch<SetStateAction<string>>;
  imageData: string;
  setImageData: Dispatch<SetStateAction<string>>;
  setIsImageChanged: Dispatch<SetStateAction<boolean>>;
};

export const EditImage: FC<Props> = (props) => {
  const { nameFile, setNameFile, imageData, setImageData, setIsImageChanged } = props;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setIsImageChanged(true);
      setNameFile(acceptedFiles[0].name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImageData(base64);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
    [setImageData, setIsImageChanged, setNameFile],
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box w="310px" mx="auto" my="10px" borderColor="gray.200" borderWidth="2px">
      <HStack spacing="10px">
        {nameFile ? (
          <Box>
            <Image mx="auto" src={imageData} htmlWidth="150px" htmlHeight="200px" alt="bookFace" />
            <Text>{nameFile}</Text>
          </Box>
        ) : (
          <Box>
            <Image mx="auto" src={NoImage} htmlWidth="150px" htmlHeight="200px" alt="bookFace" />
            <Text>Please Put a Picture</Text>
          </Box>
        )}
        {/* eslint-disable @typescript-eslint/no-unsafe-call,react/jsx-props-no-spreading */}
        <Box
          {...getRootProps()}
          mx="auto"
          borderColor="red.500"
          borderWidth="2px"
          style={{ width: '150px', height: '240px' }}
        >
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,react/jsx-props-no-spreading */}
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>登録する絵をドロップしてください</p>
          ) : (
            <p>画像の新規登録・変更の場合はココにファイルをドロップしてください</p>
          )}
        </Box>
      </HStack>
    </Box>
  );
};
