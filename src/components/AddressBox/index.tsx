import { Box } from '@chakra-ui/react';

import Text from 'src/components/Shared/Text';

import useTruncatedAddress from 'src/hooks/useTruncatedAddress';

const AddressBox = ({ title, address }) => {
  return (
    <Box flex='1'>
      <Text size='small'>{title}</Text>
      <Text isBold>{useTruncatedAddress(address)}</Text>
    </Box>
  );
};

export default AddressBox;
