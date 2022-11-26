// @ts-nocheck
import { useState } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import { Flex, Box, useDisclosure, VStack, HStack, useToast, Checkbox } from '@chakra-ui/react';

import { useAccount } from '../../context/Account';
import { db } from '../../utils/db';
import { decrypt } from '../../hooks/useCrypto';

import { Container } from '../../components/Container';
import Modal from '../../components/Modal';
import Heading from '../../components/Shared/Heading';
import Image from '../../components/Shared/Image';
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
        <Flex justifyContent={'flex-start'} maxH='150px'>
          <Image src='/seed-phrase.png' alt='Verifica' />
        </Flex>
        <Heading as='h2'>Revisémoslo nuevamente</Heading>
        <Text size='lg' opacity='.65'>
          Escribe tu frase semilla en el orden en que estaban anteriormente para validar que lo has hecho bien :)
        </Text>

        <Mnemonic mnemonic={localMnemonic} onChange={handleChangeMnemonic} />
      </VStack>

      <Flex w='100%' gap='10px' flexDirection={'column'}>
        <Button variant='solid' onClick={() => onSubmit(localMnemonic)}>
          Confirmar
        </Button>
        <Link color='default' href='/' passHref>
          Más tarde
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
        <Flex justifyContent={'flex-start'} maxH='150px'>
          <Image src='/save-seed-phrase.png' />
        </Flex>
        <Heading as='h2'>Frase semilla</Heading>
        <Text size='lg' opacity='.65'>
          Es muy importante que guardes esta frase semilla. Es la clave principal para poder reclamar tus activos en
          cualquier wallet non-custodial.
        </Text>

        <Mnemonic mnemonic={mnemonic?.split(' ')} readOnly={true} />
      </VStack>
      <Checkbox
        size='lg'
        width='100%'
        justifyContent='space-between'
        color='#fff'
        bg='#1F1F1F'
        p='20px'
        borderRadius='4px'
        onChange={() => setHasSave(!hasSave)}
      >
        Confirmo haberlas guardado
      </Checkbox>
      <Button variant='solid' disabled={!hasSave} onClick={onChangeScreen}>
        Continuar
      </Button>
      <Flex w='100%' gap='10px' flexDirection={'column'}>
        <Link color='default' href='/' passHref>
          Más tarde
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

  const handleSubmit = async (localMnemonic) => {
    const isValid = ethers.utils.isValidMnemonic(localMnemonic.join(' '));
    if (isValid) {
      onOpen();
      await db.wallets.update(1, { saveMn: true });
    } else {
      toast({ description: 'Verifique que la frase semilla sea correcta.', status: 'warning' });
    }
  };

  return (
    <>
      <Head>
        <title>Backup - Sallet</title>
      </Head>
      <Flex justifyContent={'center'} alignItems={'center'} pt={{ base: '50px', md: '60px' }}>
        <Container maxW={'md'} px='20px'>
          <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} py='20px' gap={4}>
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
                  <Flex justifyContent={'flex-start'} maxH='250px'>
                    <Image src='/backup.png' />
                  </Flex>
                  <Heading>Not your keys, not your coins</Heading>
                  <Text size='lg' opacity='.65'>
                    Nosotros te ayudamos a recibir pagos o donaciones desde cualquier parte del mundo, pero en realidad
                    eres tú el dueño de los activos.
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
                  <Button onClick={() => setShowMnemonic(true)}>Continuar</Button>
                  <Link href='/dashboard' color='default' passHref>
                    Más tarde
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
