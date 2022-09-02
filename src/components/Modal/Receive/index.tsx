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

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(wallet?.address).then(() => {
      toast({ description: 'Copied address', status: 'success' });
    });
  };

  return (
    <ModalContent bg='#fff'>
      <ModalHeader>Receive</ModalHeader>
      <ModalCloseButton />
      <ModalBody pt='20px' display='flex' w='100%' h='100%' flexDirection='column' justifyContent='space-between'>
        <Flex flexDirection='column' gap='20px' pb='40px' flex='1' justifyContent='center'>
          <Flex flexDirection='column' gap='20px'>
            <Flex align='center' justify='center'>
              {wallet?.address && <QRCode value={wallet?.address} />}
            </Flex>
            <Flex px={{ md: '40px' }} justifyContent='space-between'>
              <Box flex='1'>
                <Text fontWeight='bold'>Address</Text>
                <Text>{useTruncatedAddress(wallet?.address)}</Text>
              </Box>
              <Flex>
                <Button size='sm' onClick={() => handleCopyAddress()}>
                  Copy
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

export default Receive;
