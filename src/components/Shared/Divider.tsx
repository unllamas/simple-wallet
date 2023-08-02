import React from 'react';
import { Box } from '@chakra-ui/react';

interface DividerProps {
  y?: number;
  x?: number;
}

const Component: React.FunctionComponent<DividerProps> = ({ y = 0, x = 0 }) => {
  return <Box bg='red' margin={`${y / 2}px ${x / 2}px`} />;
};

export default Component;
