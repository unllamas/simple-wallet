import { Flex, Box, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

import { useAccount } from '../../../context/Account';
import useTruncatedAddress from '../../../hooks/useTruncatedAddress';

import Button from '../../Shared/Button';
import Text from '../../Shared/Text';

const Receive = () => {
  // Chakra
  const toast = useToast();

  // Context
  const { wallet } = useAccount();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wallet?.address);
      toast({ description: 'Address copiada', status: 'success' });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <ModalContent bg='#fff'>
      <ModalHeader fontFamily='"Merriweather", serif'>Recibir</ModalHeader>
      <ModalCloseButton />
      <ModalBody
        p='20px'
        display='flex'
        w='100%'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        gap='20px'
      >
        <Flex flexDirection='column' gap='20px' justifyContent='center'>
          <Flex flexDirection='column' alignItems='center' gap='20px'>
            <Flex align='center' justify='center'>
              {wallet?.address && <QRCode value={wallet?.address} />}
            </Flex>
            <Flex maxW='256px' w='100%' justifyContent='space-between'>
              <Box flex='1'>
                <Text size='sm'>Address</Text>
                <Text size='lg'>{useTruncatedAddress(wallet?.address)}</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex w='100%'>
          <Button onClick={handleCopyAddress}>Copiar</Button>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

export default Receive;
