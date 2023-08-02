import { Box, Button } from '@chakra-ui/react';

import Text from 'src/components/Shared/Text';

const Component = (props) => {
  const { children, brand = 'primary', title } = props;

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',

    p: {
      color: 'gray35',
    },
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    minWidth: 75,

    backgroundColor: brand,
    borderRadius: 999,

    _hover: {
      opacity: 0.85,
      backgroundColor: brand,
    },
    _active: {
      opacity: 0.65,
      backgroundColor: brand,
    },
  };

  return (
    <Box {...boxStyle}>
      <Button {...buttonStyle} {...props}>
        <Box h='24px' w='24px'>
          {children}
        </Box>
      </Button>
      {title && <Text size='small'>{title}</Text>}
    </Box>
  );
};

export default Component;
