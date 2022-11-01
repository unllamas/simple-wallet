import { Box, Image as ImageBox } from '@chakra-ui/react';

const Image = (props) => {
  const { src, alt } = props;

  return (
    <Box position='relative'>
      <ImageBox {...props} src={src} alt={alt} h='100%' />
    </Box>
  );
};

export default Image;
