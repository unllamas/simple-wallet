import { Flex, Box, Input } from '@chakra-ui/react';

import Text from 'src/components/Shared/Text';

const Component = (props) => {
  const { number } = props;

  const flexStyle = {
    display: 'flex',
    flex: 1,
    gap: '4px',
    paddingRight: '8px',

    div: {
      minWidth: '24px',
    },
  };

  const inputStyle = {
    width: '100%',

    padding: '10px 4px',

    background: 'background',
    border: 'none',
    borderBottom: '1px solid',
    borderColor: 'gray5',
    borderRadius: 0,

    color: 'text',

    _hover: {
      borderColor: 'gray35',
    },
    _focusVisible: {
      borderColor: 'primary',
    },
  };

  return (
    <Flex {...flexStyle}>
      <Box minWidth={'24px'}>
        <Text size='small'>{number}.</Text>
      </Box>
      <Input type='text' {...inputStyle} {...props} />
    </Flex>
  );
};

export default Component;
