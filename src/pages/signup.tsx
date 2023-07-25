// @ts-nocheck
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, useToast, VStack, Link as LinkBox, Spinner } from '@chakra-ui/react';

import { useAccount } from 'src/context/Account';

import Navbar from 'src/components/Layout/Navbar';
import { Container } from 'src/components/Container';
import Button from 'src/components/Shared/Button';
import Link from 'src/components/Shared/Link';
import Image from 'src/components/Shared/Image';
import Input from 'src/components/Shared/Input';
import Text from 'src/components/Shared/Text';
import Heading from 'src/components/Shared/Heading';
import Mnemonic from 'src/components/Mnemonic';

import * as gtag from 'src/lib/gtag';

const Signup = () => {
  const router = useRouter();
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
    if (value) {
      setShowValidate(true);
      setPassword(value);
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
    if (password === validatePassword) {
      const arrayToString = temporalMnemonic.join(' ');
      const { success } = await signupWallet(arrayToString, password);
      if (success) {
        const options = {
          action: 'login',
          category: 'form',
          label: 'wallet_account',
          value: '',
        };

        gtag.event(options);
        router?.push('/dashboard');
      }
    } else {
      toast({
        title: 'Contraseña incorrecta',
        description: 'Las contraseñas no coinciden.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
        <Spinner />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>Ingresar - Sallet</title>
      </Head>
      <Navbar />
      <Flex justifyContent={'center'} alignItems={'center'} pb='20px' pt={{ base: '50px', md: '60px' }}>
        <Container maxW={'md'} px='20px'>
          {showMnemonic ? (
            <Flex flexDirection={'column'} justifyContent={{ base: 'flex-start', md: 'center' }} gap={4}>
              <VStack gap='10px' alignItems='flex-start'>
                <Heading as='h2'>Frase semilla</Heading>
                <Text size='lg'>
                  Ingresa tu frase semilla o reutiliza alguna de otras wallets non-custodial.{' '}
                  <LinkBox color='#B3E0B8' textDecoration='underline'>
                    Te gustaria conocer las alternativas?
                  </LinkBox>
                </Text>

                {/* Mnemonic */}
                <Mnemonic mnemonic={temporalMnemonic} onChange={handleChangeMnemonic} />
              </VStack>

              <Flex w='100%' gap='10px' flexDirection={'column'}>
                <Button variant='solid' onClick={handleLoginWallet} disabled={loading}>
                  {loading ? 'Cargando...' : 'Validar'}
                </Button>
                <Link type='bezeledGray' href='/' passHref>
                  Cancelar
                </Link>
              </Flex>
            </Flex>
          ) : (
            <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} h='100%' gap={4}>
              <VStack gap='20px'>
                <VStack gap='10px' alignItems='flex-start'>
                  <Heading as='h2'>Contraseña</Heading>
                  <Text size='lg'>
                    Si bien somos localfirst, necesitamos saber que eres realmente tu quien mueve fondos.
                  </Text>
                </VStack>
                <VStack gap='10px' w='100%'>
                  <Input
                    h='60px'
                    placeholder='Escriba su contraseña'
                    value={password}
                    onChange={(e) => handleSetPassword(e.target.value)}
                  />
                  <Input
                    h='60px'
                    placeholder='Verifique su contraseña'
                    value={validatePassword}
                    onChange={(e) => handleSetValidatePass(e.target.value)}
                    disabled={!showValidate}
                  />
                </VStack>
              </VStack>
              <Flex w='100%' gap='10px' flexDirection={'column'}>
                <Button variant='solid' disabled={!isValid || loading} onClick={handleConfirm}>
                  {loading ? 'Cargando...' : 'Confirmar'}
                </Button>
                <Link type='bezeledGray' href='/' passHref>
                  Cancelar
                </Link>
              </Flex>
            </Flex>
          )}
        </Container>
      </Flex>
    </>
  );
};

export default Signup;
