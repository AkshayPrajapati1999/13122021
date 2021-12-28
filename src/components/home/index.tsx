/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box } from '@chakra-ui/react';

const Boards = (): JSX.Element => {
  return (
    <Box
      minHeight="50vh"
      flexGrow={3}
      mx="2%"
      style={{ display: 'flex', justifyContent: 'Center', alignItems: 'center' }}
      boxShadow="base"
      rounded="lg"
      bg="white"
      p="1rem">
      <img
        src="/App-Unik-text.png"
        alt="AppUnik logo"
        style={{ height: '30%', width: '30%', position: 'absolute', objectFit: 'contain' }}
      />
    </Box>
  );
};

export default Boards;
