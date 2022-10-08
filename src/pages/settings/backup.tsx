// @ts-nocheck
import { useState } from 'react';
import { ethers } from 'ethers';
import { Image, Flex, Box, useDisclosure, VStack, HStack, useToast, Checkbox } from '@chakra-ui/react';

import { useAccount } from '../../context/Account';

import { decrypt } from '../../hooks/useCrypto';

import { Container } from '../../components/Container';
import Modal from '../../components/Modal';
import Heading from '../../components/Shared/Heading';
import Text from '../../components/Shared/Text';
import Link from '../../components/Shared/Link';
import Button from '../../components/Shared/Button';
import Mnemonic from '../../components/Mnemonic';

const ScreenValidate = ({ onSubmit }) => {
  const [localMnemonic, setLocalMnemonic] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);

  const handleChangeMnemonic = (value, index) => {
    let newMnemonic = localMnemonic;
    newMnemonic[index] = value;
    setLocalMnemonic(newMnemonic);
  };
  return (
    <>
      <VStack gap='10px' alignItems='flex-start'>
        <Flex justifyContent={'flex-start'}>
          <Image src='/75x75.png' />
        </Flex>
        <Heading as='h2'>Validate your seed phrase</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis libero enim.
        </Text>

        <Mnemonic mnemonic={localMnemonic} onChange={handleChangeMnemonic} />
      </VStack>

      <Flex w='100%' gap='10px' flexDirection={'column'}>
        <Button variant='solid' onClick={() => onSubmit(localMnemonic)}>
          Confirm
        </Button>
        <Link color='secondary' href='/' passHref>
          Cancel
        </Link>
      </Flex>
    </>
  );
};

const ScreenWrite = ({ onChangeScreen }) => {
  const { wallets } = useAccount();
  const mnemonic = decrypt(wallets[0]?.mnemonic);

  const [hasSave, setHasSave] = useState(false);

  return (
    <>
      <VStack gap='10px' alignItems='flex-start'>
        <Flex justifyContent={'flex-start'}>
          <Image src='/75x75.png' />
        </Flex>
        <Heading as='h2'>Write your seed phrase</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis libero enim.
        </Text>

        <Mnemonic mnemonic={mnemonic?.split(' ')} readOnly={true} />
      </VStack>
      <Checkbox size='lg' width='100%' justifyContent='space-between' mb='10px' onChange={() => setHasSave(!hasSave)}>
        I confirm that I have saved them
      </Checkbox>
      <Button variant='solid' disabled={!hasSave} onClick={onChangeScreen}>
        Continue
      </Button>
      <Flex w='100%' gap='10px' flexDirection={'column'}>
        <Link color='secondary' href='/' passHref>
          Cancel
        </Link>
      </Flex>
    </>
  );
};

const Backup = () => {
  // Chakra
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showMnemonic, setShowMnemonic] = useState(false);
  const [showValidateMnemonic, setShowValidateMnemonic] = useState(false);

  const handleSubmit = (localMnemonic) => {
    const isValid = ethers.utils.isValidMnemonic(localMnemonic.join(' '));
    if (isValid) {
      onOpen();
      localStorage.setItem('sw_saveMnemonic', true);
    } else {
      toast({ description: 'Verifique que el mnemonic sea correcto.', status: 'warning' });
    }
  };

  return (
    <>
      <Flex h='100%' justifyContent={'center'} alignItems={'center'}>
        <Container maxW={'md'} px='20px' bg='#fff'>
          <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} h='100%' gap={4}>
            {showMnemonic ? (
              showValidateMnemonic ? (
                <ScreenValidate onSubmit={handleSubmit} />
              ) : (
                <ScreenWrite onChangeScreen={() => setShowValidateMnemonic(true)} />
              )
            ) : (
              <>
                <VStack gap='10px' alignItems='flex-start'>
                  {/* Content */}
                  <Flex>
                    <Image src='/150x150.png' />
                  </Flex>
                  <Heading>Not your keys, not your coins</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis
                    libero enim.
                  </Text>

                  {/* Steps */}
                  <Flex justifyContent='center' display='none'>
                    <HStack
                      gap='5px'
                      position='relative'
                      _before={{
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        background: '#ccc',
                        zIndex: 0,
                      }}
                    >
                      <Box zIndex={2} border='3px solid #fff' h='15px' w='15px' borderRadius='50%' bg='#333' />
                      <Box zIndex={2} border='3px solid #fff' h='15px' w='15px' borderRadius='50%' bg='#ccc' />
                      <Box zIndex={2} border='3px solid #fff' h='15px' w='15px' borderRadius='50%' bg='#ccc' />
                    </HStack>
                  </Flex>
                </VStack>

                {/* Buttons */}
                <Flex w='100%' flexDirection={'column'} gap='10px'>
                  <Button disabled={''} onClick={() => setShowMnemonic(true)}>
                    Continue
                  </Button>
                  <Link href='/dashboard' color='secondary' passHref>
                    Later
                  </Link>
                </Flex>
              </>
            )}
          </Flex>
        </Container>
      </Flex>

      <Modal type='backup' isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Backup;
