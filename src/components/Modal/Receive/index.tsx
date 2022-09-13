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
      toast({ description: 'Copied address', status: 'success' });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <ModalContent bg='#fff'>
      <ModalHeader>Receive</ModalHeader>
      <ModalCloseButton />
      <ModalBody
        p='20px'
        display='flex'
        w='100%'
        h='100%'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        gap='20px'
      >
        <Flex flexDirection='column' gap='20px' flex='1' justifyContent='center'>
          <Flex flexDirection='column' alignItems='center' gap='20px'>
            <Flex align='center' justify='center'>
              {wallet?.address && <QRCode value={wallet?.address} />}
            </Flex>
            <Flex maxW='256px' w='100%' justifyContent='space-between'>
              <Box flex='1'>
                <Text fontWeight='bold'>Address</Text>
                <Text>{useTruncatedAddress(wallet?.address)}</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex maxW={{ base: '100%', md: '256px' }} w='100%'>
          <Button onClick={handleCopyAddress}>Copy address</Button>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

export default Receive;
