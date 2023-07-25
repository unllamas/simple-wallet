import { Box } from '@chakra-ui/react';

import Text from 'src/components/Shared/Text';
import Flex from 'src/components/Shared/Flex';

import IconETH from 'src/components/Icons/ETH';
import IconDAI from 'src/components/Icons/DAI';

import bigNumberTokenToString from 'src/hooks/useUtils';

const Component = (props) => {
  const { name, token, price, onClick, active = false, readOnly = false } = props;

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    width: '100%',

    padding: '20px',

    backgroundColor: 'gray5',
    borderWidth: '1px',
    borderColor: active ? 'primary' : 'gray5',
    borderRadius: '8px',

    cursor: readOnly ? 'default' : 'pointer',

    _hover: {
      borderColor: readOnly ? 'gray5' : active ? 'primary' : 'gray35',
    },
  };

  return (
    <Box {...style} onClick={() => !readOnly && onClick(name)} tabIndex={readOnly ? -1 : 1}>
      <Flex align='center' gap={8}>
        {name === 'ethereum' ? <IconETH /> : <IconDAI />}
        <Text fontWeight='bold'>{name.toUpperCase()}</Text>
      </Flex>
      <Flex direction='column' align='flex-end'>
        <Text isBold>${Number(price).toFixed(2)}</Text>
        <Text size='small'>{Number(bigNumberTokenToString(token)).toFixed(4) || '0.00'}</Text>
      </Flex>
    </Box>
  );
};

export default Component;
