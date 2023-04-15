import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import defaultImage from '../assets/house.png';
import { GoVerified } from 'react-icons/go';
import { FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';

function Property({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) {
  return (
    <Link href={`/proprty/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer">
        <Box>
          <Image
            alt="photo"
            src={coverPhoto ? coverPhoto.url : defaultImage}
            width={400}
            height={260}
          />
        </Box>
        <Box w="full">
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
          <Text fontSize="lg">{title.length > 30 ? `${title.substring(0, 30)}...` : title}</Text>
        </Box>
      </Flex>
    </Link>
  );
}
export default Property;
