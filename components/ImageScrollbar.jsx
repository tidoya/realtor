import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageScrollbar = ({ data }) => {
  return (
    <Box className="slide-container">
      <Zoom scale={0.4}>
        {data.map((image) => (
          <Image
            key={image.id}
            alt="imageProp"
            placeholder="blur"
            blurDataURL={image.url}
            src={image.url}
            width={800}
            height={500}
          />
        ))}
      </Zoom>
    </Box>
  );
};

export default ImageScrollbar;
