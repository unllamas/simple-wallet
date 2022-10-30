import { Button as ButtonBox, VStack, Box } from '@chakra-ui/react';
import Text from '../Text';

const Button = (props) => {
  const { children, isBlock, color = 'primary', size = 'md', type, label = '' } = props;

  const variants = {
    primary: {
      width: {
        base: '100%',
        md: isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '22px' : '8px',
      backgroundColor: size === 'md' ? '#242424' : '#EFEFEF',
      color: size === 'md' ? '#fff' : '#333',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#191919',
      },
    },
    secondary: {
      width: {
        base: '100%',
        md: isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '22px' : '8px',
      backgroundColor: size === 'md' ? '#EFEFEF' : '#F8F1E8',
      color: '#333',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#D6D6D6',
      },
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
      <ButtonBox borderRadius='0' fontWeight={600} alignItems='center' {...variants[color]} {...props}>
        {children}
      </ButtonBox>
    );
  }
};

export default Button;
