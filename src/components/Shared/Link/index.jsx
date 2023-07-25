import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const Component = (props) => {
  const { children, brand = 'primary', size = 'large', type = 'filled' } = props;

  const isLarge = size === 'large';
  const isSolid = type === 'filled';

  const dimensions = {
    height: '30px',
    largeHeight: '60px',
    minWidth: '30px',
    largeMinWidth: '200px',
  };

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: isLarge ? dimensions.largeHeight : dimensions.height,
    minWidth: isLarge ? dimensions.largeMinWidth : dimensions.minWidth,
    width: { base: '100%', md: 'initial' },

    padding: '18px 12px',

    borderRadius: '8px',

    color: isSolid ? 'background' : brand,
    fontSize: isLarge ? '16px' : '14px',
    fontWeight: 700,
    textAlign: 'center',

    _hover: {
      textDecoration: 'none',
    },
  };

  const variants = {
    filled: {
      backgroundColor: brand,

      _hover: {
        opacity: 0.85,
        backgroundColor: brand,
      },
      _active: {
        opacity: 0.65,
        backgroundColor: brand,
      },
    },
    bezeled: {
      backgroundColor: `${brand}15`,

      _hover: {
        opacity: 0.85,
        backgroundColor: `${brand}15`,
      },
      _active: {
        opacity: 0.65,
        backgroundColor: `${brand}15`,
      },
    },
    bezeledGray: {
      backgroundColor: 'gray5',

      _hover: {
        opacity: 0.85,
        backgroundColor: 'gray5',
      },
      _active: {
        opacity: 0.65,
        backgroundColor: 'gray5',
      },
    },
    borderless: {
      backgroundColor: 'transparent',

      _hover: {
        opacity: 0.85,
        backgroundColor: 'transparent',
      },
      _active: {
        opacity: 0.65,
        backgroundColor: 'transparent',
      },
    },
  };

  return (
    <Link as={NextLink} {...props} {...style} {...variants[type]} passHref>
      {children}
    </Link>
  );
};

export default Component;
