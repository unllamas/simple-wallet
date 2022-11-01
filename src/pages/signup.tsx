// @ts-nocheck
import { useState } from 'react';
import Head from 'next/head';
import { Image, Flex, useToast, VStack } from '@chakra-ui/react';

import { useAccount } from '../context/Account';

import { Container } from '../components/Container';
import Button from '../components/Shared/Button';
import Link from '../components/Shared/Link';
import Input from '../components/Shared/Input';
import Text from '../components/Shared/Text';
import Heading from '../components/Shared/Heading';
import Mnemonic from '../components/Mnemonic';

const Signup = () => {
  const toast = useToast();

  // Context
  const { signupWallet } = useAccount();

  // Component
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  const [showValidate, setShowValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [showMnemonic, setShowMnemonic] = useState(false);

  const [loading, setLoading] = useState(false);

  // Pass
  const handleSetPassword = (value) => {
    // TO-DO: añadir validaciones min/max
    setPassword(value);
  };

  const handleContinue = () => {
    if (password) {
      setShowValidate(true);
    }
  };

  // Verify
  const handleSetValidatePass = (value) => {
    setValidatePassword(value);
    if (value === password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleConfirm = () => {
    if (password === validatePassword) {
      setShowMnemonic(true);
    } else {
      toast({
        title: 'Contraseña incorrecta',
        description: 'Las contraseñas no coinciden.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // Mnemonic
  const [temporalMnemonic, setTemporalMnemonic] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);

  const handleChangeMnemonic = (value, index) => {
    let localMnemonic = temporalMnemonic;
    localMnemonic[index] = value;
    setTemporalMnemonic(localMnemonic);
  };

  const handleLoginWallet = async () => {
    setLoading(true);
    const arrayToString = temporalMnemonic.join(' ');
    const { success } = await signupWallet(arrayToString);
    if (success) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Ingresar - Sallet</title>
      </Head>
      <Flex justifyContent={'center'} alignItems={'center'} pb='20px' pt={{ base: '50px', md: '60px' }}>
        <Container maxW={'md'} px='20px'>
          {showMnemonic ? (
            <Flex flexDirection={'column'} justifyContent={{ base: 'flex-start', md: 'center' }} gap={4}>
              <VStack gap='10px' alignItems='flex-start'>
                <Image src='/img/34.png' h='200px' />
                <Heading as='h2'>Frase semilla</Heading>
                <Text size='lg'>
                  Tienes tu frase semilla creada por alguna otra wallet non-custodial? Perfecto! Funciona para todas :)
                </Text>

                {/* Mnemonic */}
                <Mnemonic mnemonic={temporalMnemonic} onChange={handleChangeMnemonic} />
              </VStack>

              <Flex w='100%' gap='10px' flexDirection={'column'}>
                <Button variant='solid' onClick={handleLoginWallet} disabled={loading}>
                  {loading ? 'Cargando...' : 'Ingresar'}
                </Button>
                <Link color='secondary' href='/' passHref>
                  Cancelar
                </Link>
              </Flex>
            </Flex>
          ) : (
            <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} h='100%' gap={4}>
              {!showValidate ? (
                <>
                  <VStack gap='20px'>
                    <VStack gap='10px' alignItems='flex-start'>
                      <Flex justifyContent={'flex-start'}>
                        <Image src='/img/35.png' h='200px' />
                      </Flex>
                      <Heading as='h2'>Genera</Heading>
                      <Text size='lg'>
                        Necesitas un respaldo para saber que eres realmente tú quien maneja la cuenta.
                      </Text>
                    </VStack>
                    <Input
                      h='60px'
                      placeholder='Your password'
                      value={password}
                      onChange={(e) => handleSetPassword(e.target.value)}
                    />
                  </VStack>
                  <Flex w='100%' gap='10px' flexDirection={'column'}>
                    <Button disabled={!password} onClick={handleContinue}>
                      Continuar
                    </Button>
                    <Link color='secondary' href='/' passHref>
                      Cancelar
                    </Link>
                  </Flex>
                </>
              ) : (
                <>
                  <VStack gap='20px'>
                    <VStack gap='10px' alignItems='flex-start'>
                      <Flex justifyContent={'flex-start'}>
                        <Image src='/img/31.png' h='200px' />
                      </Flex>
                      <Heading as='h2'>Verifica</Heading>
                      <Text size='lg'>Comprobemos que recuerdas la contraseña.</Text>
                    </VStack>
                    <Input
                      h='60px'
                      placeholder='Verify your password'
                      value={validatePassword}
                      onChange={(e) => handleSetValidatePass(e.target.value)}
                    />
                  </VStack>
                  <Flex w='100%' gap='10px' flexDirection={'column'}>
                    <Button variant='solid' disabled={!isValid || loading} onClick={handleConfirm}>
                      {loading ? 'Cargando...' : 'Confirmar'}
                    </Button>
                    <Link color='secondary' href='/' passHref>
                      Cancelar
                    </Link>
                  </Flex>
                </>
              )}
            </Flex>
          )}
        </Container>
      </Flex>
    </>
  );
};

export default Signup;
