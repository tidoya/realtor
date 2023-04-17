import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import defaultImage from '../assets/house.png';
import { GoVerified } from 'react-icons/go';
import { FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import FooterInProperty from './FooterInProperty/FooterInProperty';

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
  const fullTitle = false;
  return (
    <Link href={`/property/${externalID}`} passHref>
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
          <FooterInProperty
            property={{
              price,
              rentFrequency,
              rooms,
              title,
              baths,
              area,
              agency,
              isVerified,
              fullTitle,
            }}
          />
        </Box>
      </Flex>
    </Link>
  );
}
export default Property;
