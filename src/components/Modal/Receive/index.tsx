import { Flex, Box, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import { hotjar } from 'react-hotjar';

import { useAccount } from '../../../context/Account';
import useTruncatedAddress from '../../../hooks/useTruncatedAddress';

import Button from '../../Shared/Button';
import Text from '../../Shared/Text';
import Heading from '../../Shared/Heading';

import AddressBox from '../../AddressBox';

const Receive = () => {
  // Chakra
  const toast = useToast();

  // Context
  const { wallet } = useAccount();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wallet?.address);
      // Event for Hotjar
      hotjar.event('copy-address-button');
      toast({ description: 'Address copiada', status: 'success' });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <ModalContent bg='#111111' overflow='hidden'>
      {/* Heading */}
      <Flex
        w='100%'
        h='60px'
        justifyContent='space-between'
        alignItems='center'
        px='20px'
        backgroundColor='#1A1A1A'
        borderBottom='1px solid #202020'
      >
        <Text>
          <strong>Recibir</strong>
        </Text>
        <ModalCloseButton position='relative' top='0' left='0' />
      </Flex>

      {/* Body */}
      <ModalBody p='20px' display='flex' w='100%' flexDirection='column' gap='20px'>
        <Flex flexDirection='column' gap='20px' flex='1' h='100%' justifyContent='center'>
          <Flex flexDirection='column' alignItems='center' gap='20px'>
            <Flex align='center' justify='center' bg='#fff' p='20px'>
              {wallet?.address && <QRCode value={wallet?.address} />}
            </Flex>
            <Flex w='100%' justifyContent='space-between' alignItems='center'>
              <AddressBox title='Address' address={wallet?.address} />
              <Button size='sm' onClick={handleCopyAddress}>
                Copiar
              </Button>
            </Flex>
            {/* <Text opacity='.65'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text> */}

            <Button color='default' isBlock disabled={true}>
              Compartir
            </Button>
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

export default Receive;
