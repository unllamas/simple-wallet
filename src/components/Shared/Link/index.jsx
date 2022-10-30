import NextLink from 'next/link';
import { Text } from '@chakra-ui/react';

const Link = (props) => {
  const { children, isBlock, color = 'primary', size = 'md' } = props;

  const variants = {
    primary: {
      height: size === 'md' ? '60px' : '40px',
      padding: size === 'md' ? '22px' : '16px',
      backgroundColor: '#333',
      color: '#fff',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#191919',
        textDecoration: 'none',
      },
    },
    secondary: {
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '22px' : '8px',
      backgroundColor: '#F8F1E8',
      border: '1px solid #ccc',
      color: '#333',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#fff',
        textDecoration: 'none',
      },
    },
  };

  return (
    <NextLink {...props} passHref>
      <Text
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius='0'
        fontWeight={600}
        width='100%'
        {...variants[color]}
      >
        {children}
      </Text>
    </NextLink>
  );
};

export default Link;
