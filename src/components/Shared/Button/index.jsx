import { Button } from '@chakra-ui/react';

const Component = (props) => {
  const { children, brand = 'primary', size = 'large', type = 'filled' } = props;

  const isLarge = size === 'large';
  const isSolid = type === 'filled';

  const dimensions = {
    height: '30px',
    largeHeight: '60px',
    minWidth: '30px',
    largeMinWidth: '60px',
  };

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: isLarge ? dimensions.largeHeight : dimensions.height,
    minWidth: isLarge ? dimensions.largeMinWidth : dimensions.minWidth,
    maxWidth: { base: 'initial', md: '200px' },

    padding: isLarge ? '13px' : '4px 7px',

    borderRadius: '8px',

    color: isSolid ? 'background' : brand,
    fontSize: isLarge ? '16px' : '14px',
    fontWeight: 700,
    textAlign: 'center',
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
    <Button {...variants[type]} {...style} {...props}>
      {children}
    </Button>
  );
};

export default Component;
