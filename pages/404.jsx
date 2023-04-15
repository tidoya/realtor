import Image from 'next/image';
import React from 'react';
import NotFoundimage from '../assets/NotFound.webp';
import { Flex } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-evenly">
      <Image src={NotFoundimage} alt="not found" width={600} height={300}></Image>
    </Flex>
  );
};

export default NotFound;
