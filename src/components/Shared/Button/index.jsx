import { Button as ButtonBox, VStack, Box } from '@chakra-ui/react';
import Text from '../Text';

const Button = (props) => {
  const { children, isBlock, color = 'primary', size = 'md', type, label = '' } = props;

  const variants = {
    primary: {
      width: {
        base: !!isBlock ? '100%' : 'auto',
        md: !!isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '18px' : '8px',
      backgroundColor: '#B3E0B8',
      border: '2px solid #B3E0B8',
      color: '#141318',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#8FD196',
        _disabled: {
          backgroundColor: '#B3E0B8',
        },
      },
      _active: {
        backgroundColor: '#6bc273',
      },
    },
    secondary: {
      width: {
        base: !!isBlock ? '100%' : 'auto',
        md: !!isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '18px' : '8px',
      backgroundColor: '#F5C365',
      border: '2px solid #F2B136',
      color: '#111111',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#F2B136',
        _disabled: {
          backgroundColor: '#F5C365',
        },
      },
      _active: {
        backgroundColor: '#E69B0F',
      },
    },
    default: {
      width: {
        base: !!isBlock ? '100%' : 'auto',
        md: !!isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      backgroundColor: type === 'circle' ? '#F5C365' : '#111',
      border: '2px solid #2C2C2C',
      color: '#fff',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: type === 'circle' ? '#F2B136' : '#2C2C2C',
        _disabled: {
          backgroundColor: '#111',
        },
      },
    },
    blank: {
      width: 'inherit',
      height: 'inherit',
      padding: 'initial',
      backgroundColor: 'inherit !important',
      border: 'inherit',
      color: 'inherit',
      borderRadius: 'inherit',
    },
  };

  if (type === 'circle') {
    return (
      <>
        <VStack display='flex' flexDirection='column'>
          <ButtonBox
            display='flex'
            maxW='60px'
            maxH='60px'
            borderRadius='50%'
            p='20px'
            alignItems='center'
            {...variants[color]}
            {...props}
          >
            <Box h='24px' w='24px'>
              {children}
            </Box>
          </ButtonBox>
          {label && <Text size='sm'>{label}</Text>}
        </VStack>
      </>
    );
  } else {
    return (
      <ButtonBox borderRadius='0' minW='60px' fontWeight={600} alignItems='center' {...variants[color]} {...props}>
        {children}
      </ButtonBox>
    );
  }
};

export default Button;
