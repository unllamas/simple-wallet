import { Input as InputBox } from '@chakra-ui/react';

const Input = (props) => {
  return (
    <InputBox zIndex={0} h='60px' backgroundColor='#fff' borderRadius='0' padding='20px' color='#333' {...props} />
  );
};

export default Input;
