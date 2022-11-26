import { Input as InputBox } from '@chakra-ui/react';
import { style } from './style';

const Input = (props) => {
  return <InputBox padding='20px' borderRadius='8px' {...props} {...style} />;
};

export default Input;
