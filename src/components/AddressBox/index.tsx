import { Box } from '@chakra-ui/react';

import Text from '../Shared/Text';

import useTruncatedAddress from '../../hooks/useTruncatedAddress';

const AddressBox = ({ title, address }) => {
  return (
    <Box flex='1'>
      <Text size='sm'>{title}</Text>
      <Text size='lg'>{useTruncatedAddress(address)}</Text>
    </Box>
  );
};

export default AddressBox;
