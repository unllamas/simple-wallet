import NextLink from 'next/link';
import { Text } from '@chakra-ui/react';

const Link = (props) => {
  const { children, isBlock, color = 'primary', size = 'md' } = props;

  const variants = {
    primary: {
      height: size === 'md' ? '60px' : '40px',
      padding: size === 'md' ? '22px' : '16px',
      backgroundColor: '#B3E0B8',
      border: '2px solid #B3E0B8',
      color: '#141318',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#8FD196',
        textDecoration: 'none',
      },
    },
    default: {
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '22px' : '8px',
      backgroundColor: '#111111',
      border: '2px solid #2C2C2C',
      color: '#fff',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#2C2C2C',
        textDecoration: 'none',
      },
    },
    terciary: {
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '18px' : '8px',
      backgroundColor: '#DBA2A3',
      border: '1px solid #DBA2A3',
      color: '#141318',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#CD7E80',
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
