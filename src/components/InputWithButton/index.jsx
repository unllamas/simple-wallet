import { Flex, Box, useToast } from '@chakra-ui/react';
import { ethers } from 'ethers';

import Button from '../Shared/Button';
import Input from '../Shared/Input';

import useTruncatedAddress from '../../hooks/useTruncatedAddress';

const InputWithButton = ({ placeholder, value, onChange, onClick }) => {
  // Chakra
  const toast = useToast();

  const handlePasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const addressIsValid = ethers.utils.isAddress(text);

      if (addressIsValid) {
        onClick(text);
      } else {
        toast({
          description: 'La address parece ser incorrecta.',
          status: 'warning',
        });
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const handleValidateAddress = (value) => {
    const addressIsValid = ethers.utils.isAddress(value);
    if (addressIsValid) {
      onChange(value);
    } else {
      toast({
        description: 'La address parece ser incorrecta.',
        status: 'warning',
      });
    }
  };

  return (
    <Box position='relative' flex='1'>
      <Input
        pr='100px'
        placeholder={placeholder}
        value={value && useTruncatedAddress(value)}
        onChange={(e) => handleValidateAddress(e.target.value)}
      />
      <Flex position='absolute' zIndex={1} right='20px' top='0' h='100%' alignItems={'center'}>
        <Button size='sm' onClick={handlePasteAddress} disabled={value}>
          Pegar
        </Button>
      </Flex>
    </Box>
  );
};

export default InputWithButton;
