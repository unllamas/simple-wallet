import { Flex, Box, VStack } from '@chakra-ui/react';

import Text from '../Shared/Text';

import IconETH from '../Icons/ETH';
import IconDAI from '../Icons/DAI';

import bigNumberTokenToString from '../../hooks/useUtils';

const Token = (props) => {
  const { name, token, price } = props;

  return (
    <Flex flex='1' alignItems={'center'} justifyContent={'space-between'} w='100%' p='20px' {...props}>
      <Flex alignItems={'center'} gap='10px'>
        <Box>{name === 'ETH' ? <IconETH /> : <IconDAI />}</Box>
        <Text fontWeight='bold'>{name}</Text>
      </Flex>
      <VStack alignItems='flex-end'>
        <Text>${Number(price).toFixed(2)}</Text>
        <Text size='sm' mt='0px !important'>
          {Number(bigNumberTokenToString(token)).toFixed(10) || '0.00'}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Token;
