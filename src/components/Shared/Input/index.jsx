import { Box, Input } from '@chakra-ui/react';

import Text from 'src/components/Shared/Text';

const Component = (props) => {
  const { ref, iconLeft, disabled } = props;

  const boxStyle = {
    overflow: 'hiddden',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',

    backgroundColor: 'gray5',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: 'gray5',

    color: 'text',
  };

  const iconLeftStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '60px',

    padding: '0 20px',

    borderRight: '1px solid gray5',
  };

  const inputStyle = {
    width: '100%',
    minHeight: '60px',

    padding: '14px 18px',

    backgroundColor: 'transparent',
    borderRadius: iconLeft ? '0 10px 10px 0' : '10px',

    fontSize: '16px',

    _placeholder: {
      color: 'gray35',
    },
  };

  return (
    <Box {...boxStyle}>
      {iconLeft && (
        <Box {...iconLeftStyle}>
          <Text size='small'>{iconLeft}</Text>
        </Box>
      )}
      <Input ref={ref} tabIndex={disabled ? -1 : 1} {...inputStyle} {...props} />
    </Box>
  );
};

export default Component;
