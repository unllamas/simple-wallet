import { Flex, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => (
  <Flex
    width='100%'
    maxW='448px'
    direction='column'
    // alignItems='center'
    justifyContent='flex-start'
    // bg="gray.50"
    mx='auto'
    // px='20px'
    color='black'
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
    transition='all 0.15s ease-out'
    {...props}
  />
);
