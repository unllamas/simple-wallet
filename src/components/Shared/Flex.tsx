import { Flex } from '@chakra-ui/react';

const Component = (props) => {
  const {
    children,
    align = 'flex-start',
    justify = 'flex-start',
    direction,
    gap = 0,
    padding = 0,
    background = 'transparent',
  } = props;

  return (
    <Flex
      {...props}
      flexDirection={direction}
      justifyContent={justify}
      alignItems={align}
      gap={`${gap}px`}
      padding={padding}
      background={background}
      width='100%'
    >
      {children}
    </Flex>
  );
};

export default Component;
