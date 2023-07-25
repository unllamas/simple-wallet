import { Flex } from '@chakra-ui/react';

const Component = (props) => {
  const { size = 'medium' } = props;

  const isSizeMedium = size === 'medium';
  return (
    <Flex
      width='100%'
      maxWidth={isSizeMedium ? '700px' : '450px'}
      direction='column'
      justifyContent='flex-start'
      mx='auto'
      p='0 20px'
      color='black'
      {...props}
    />
  );
};

export default Component;
