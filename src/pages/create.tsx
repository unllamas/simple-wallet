// @ts-nocheck
import { useState } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { Flex, useToast, VStack, Spinner } from '@chakra-ui/react';

import { useAccount } from '../context/Account';

import { Container } from '../components/Container';
import Button from '../components/Shared/Button';
import Link from '../components/Shared/Link';
import Input from '../components/Shared/Input';
import Text from '../components/Shared/Text';
import Heading from '../components/Shared/Heading';
import Image from '../components/Shared/Image';

import * as gtag from '../lib/gtag';

const Create = () => {
  const router = useRouter();
  const toast = useToast();

  // Context
  const { wallet, createWallet } = useAccount();

  // Component
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  const [showValidate, setShowValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [loading, setLoading] = useState(false);

  if (wallet?.address) {
    router.push('/dashboard');
    return;
  }

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

  const handleConfirm = async () => {
    setLoading(true);
    if (password === validatePassword) {
      const { success } = await createWallet(password);
      if (success) {
        const options = {
          action: 'create',
          category: 'form',
          label: 'wallet_account',
          value: '',
        };

        gtag.event(options);
        router.push('/dashboard');
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
        <title>Crear - Sallet</title>
      </Head>
      <Flex justifyContent={'center'} alignItems={'center'} pt={{ base: '50px', md: '60px' }}>
        <Container maxW={'md'} p='20px'>
          <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} gap={4}>
            <>
              <VStack alignItems='flex-start' gap='10px'>
                <Flex justifyContent={'flex-start'} maxH='150px' margin='0 auto'>
                  <Image src='/password.png' alt='Genera' />
                </Flex>
                <Heading as='h2'>Seguridad</Heading>
                <Text size='lg' opacity='.65'>
                  Si bien toda informacion queda almacenada en su dispotivo, necesita un metodo de seguridad minimo para
                  retirar fondos.
                </Text>
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
              <Flex w='100%' gap='10px' flexDirection={'column'}>
                <Button variant='solid' disabled={!isValid || loading} onClick={handleConfirm}>
                  {loading ? <Spinner /> : 'Confirmar'}
                </Button>
                <Link color='default' href='/' passHref>
                  Cancelar
                </Link>
              </Flex>
            </>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Create;
