import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import millify from 'millify';
import React from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';

const FooterInProperty = ({
  property: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    fullTitle,
  },
}) => {
  return (
    <>
      <Flex paddingTop="2" alignItems="center" justifyContent="flex-start">
        <Flex alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar marginLeft={3} size="sm" src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
        {rooms} <FaBath /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
      {fullTitle ? (
        <>
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="gray.600">
            {description}
          </Text>
        </>
      ) : (
        <Text fontSize="lg">{title?.length > 30 ? `${title?.substring(0, 30)}...` : title}</Text>
      )}
    </>
  );
};

export default FooterInProperty;
