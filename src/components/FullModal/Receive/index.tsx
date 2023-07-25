import { Flex, useToast } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

import { useAccount } from 'src/context/Account';

import Navbar from 'src/components/Layout/Navbar';
import Button from 'src/components/Shared/Button';
import Divider from 'src/components/Shared/Divider';

import AddressBox from 'src/components/AddressBox';
import ScreenView from 'src/components/Layout/ScreenView';
import Container from 'src/components/Layout/Container';

const Component = ({ onClose }) => {
  // Chakra
  const toast = useToast();

  // Context
  const { wallet } = useAccount();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wallet?.address);
      toast({ description: 'Address copiada', status: 'success' });
      onClose();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <Navbar type='modal' title='receive' onClose={onClose} />
      <ScreenView alignItems='center' justifyContent='center'>
        <Flex
          flex={{ base: 1, md: 'inherit' }}
          align='center'
          justify='center'
          bg='#fff'
          py={{ base: 0, md: '80px' }}
          width={{ base: '100%', md: '410px' }}
          borderRadius={{ base: 0, md: '8px' }}
        >
          {wallet?.address && <QRCode value={wallet?.address} />}
        </Flex>
        <Divider y={16} />
        <Container size='small'>
          <Flex flexDirection='column' alignItems='center' gap='20px'>
            <Flex w='100%' justifyContent='space-between' alignItems='center'>
              <AddressBox title='Address' address={wallet?.address} />
              <div>
                <Button size='small' type='bezeled' onClick={handleCopyAddress}>
                  Copiar
                </Button>
              </div>
            </Flex>
            {/* <Text align='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text> */}
          </Flex>
        </Container>
      </ScreenView>
    </>
  );
};

export default Component;
