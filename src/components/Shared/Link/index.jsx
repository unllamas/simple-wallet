import NextLink from 'next/link';
import { Link as LinkBox } from '@chakra-ui/react';

const Link = (props) => {
  const { children, isBlock, color = 'primary', size = 'md' } = props;

  const variants = {
    primary: {
      width: {
        base: '100%',
        md: isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '22px' : '8px',
      backgroundColor: '#333',
      color: '#fff',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#191919',
        textDecoration: 'none',
      },
    },
    secondary: {
      width: {
        base: '100%',
        md: isBlock && '100%',
      },
      height: size === 'md' ? '60px' : '30px',
      padding: size === 'md' ? '22px' : '8px',
      backgroundColor: '#EFEFEF',
      color: '#333',
      fontSize: size === 'md' ? '16px' : '14px',
      _hover: {
        backgroundColor: '#D6D6D6',
        textDecoration: 'none',
      },
    },
  };

  return (
    <NextLink {...props} passHref>
      <LinkBox
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius='4px'
        fontWeight={600}
        {...variants[color]}
      >
        {children}
      </LinkBox>
    </NextLink>
  );
};

export default Link;
