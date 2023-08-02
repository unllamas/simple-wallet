import { Box, useToast } from '@chakra-ui/react';
import { ethers } from 'ethers';

import Button from 'src/components/Shared/Button';
import Input from 'src/components/Shared/Input';

import useTruncatedAddress from 'src/hooks/useTruncatedAddress';

const Component = (props) => {
  const { placeholder, value, onChange, onClick } = props;

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
    }
    // else {
    //   toast({
    //     description: 'La address parece ser incorrecta.',
    //     status: 'warning',
    //   });
    // }
  };

  const style = {
    position: 'relative',
    display: 'flex',
    width: '100%',
  };

  const buttonBoxStyle = {
    position: 'absolute',
    zIndex: 1,
    right: '20px',
    top: 0,

    display: 'flex',
    height: '100%',
    alignItems: 'center',
  };

  return (
    <Box {...style}>
      <Input
        placeholder={placeholder}
        value={value && useTruncatedAddress(value)}
        onChange={(e) => handleValidateAddress(e.target.value)}
        autoFocus={!value}
      />
      <Box {...buttonBoxStyle}>
        <Button size='small' type='bezeled' onClick={handlePasteAddress} disabled={value}>
          Pegar
        </Button>
      </Box>
    </Box>
  );
};

export default Component;
