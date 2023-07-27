import { Box, useToast } from '@chakra-ui/react';
import { ethers } from 'ethers';

import Button from 'src/components/Shared/Button';
import Input from 'src/components/Shared/Input';

import useTruncatedAddress from 'src/hooks/useTruncatedAddress';

const Component = (props) => {
  const { placeholder, value, onChange, onClick, addressIsValid, setAddressIsValid } = props;

  // Chakra
  const toast = useToast();

  const handlePasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const isValid = ethers.utils.isAddress(text);
      setAddressIsValid(isValid);

      if (isValid) {
        onClick(text);
        toast({
          description: 'Perfecto',
          status: 'success',
          position: 'top',
          duration: '1500'
        });
      } else {
        toast({
          description: 'No existe la dirección de esta wallet',
          status: 'error',
          position: 'top',
          duration: '1500'
        });
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  const handleValidateAddress = ({ target: { value } }) => {
    const isValid = ethers.utils.isAddress(value);
    setAddressIsValid(isValid);
    onChange(value);
  };

  const truncated = addressIsValid && value !== null && value !== ''
  const inputValue = truncated ? useTruncatedAddress(value) : value

  const style = {
    position: 'relative',
    display: 'flex',
    width: '100%',
  };

  const buttonBoxStyle = {
    position: 'absolute',
    zIndex: 1,
    right: '2px',
    top: '2px',

    display: 'flex',
    height: '100%',
    alignItems: 'center',

    padding: '5px 20px',

    minWidth: 'fit-content',
    width: '80px',
    maxHeight: '56px',

    backgroundColor: '#1B1B1B',
    borderRadius: '0px 10px 10px 0px'
  };

  return (
    <Box {...style}>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleValidateAddress}
        autoFocus={!value}
        style={{ paddingRight: '100px' }}
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
