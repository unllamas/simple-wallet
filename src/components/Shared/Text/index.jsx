import { Text } from '@chakra-ui/react';

const Component = (props) => {
  const { children, size = 'medium', opacity = 100, isBold = false, align = 'left' } = props;

  const isSmall = size === 'small';

  const style = {
    opacity,

    margin: 0,

    color: 'text',
    fontSize: `${isSmall ? 14 : 16}px`,
    lineHeight: `${isSmall ? 20 : 22}px`,
    fontWeight: isBold ? 700 : 400,
    textAlign: align,
  };

  return (
    <Text {...style} {...props}>
      {children}
    </Text>
  );
};

export default Component;
