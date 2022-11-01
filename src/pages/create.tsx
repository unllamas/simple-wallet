import { useState } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { Flex, useToast, VStack } from '@chakra-ui/react';

import { useAccount } from '../context/Account';

import { Container } from '../components/Container';
import Button from '../components/Shared/Button';
import Link from '../components/Shared/Link';
import Input from '../components/Shared/Input';
import Text from '../components/Shared/Text';
import Heading from '../components/Shared/Heading';
import Image from '../components/Shared/Image';

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

  const handleConfirm = async () => {
    if (password === validatePassword) {
      setLoading(true);
      const { success } = await createWallet();
      if (success) {
        router.push('/dashboard');
        setLoading(false);
      }
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

  return (
    <>
      <Head>
        <title>Crear - Sallet</title>
      </Head>
      <Flex justifyContent={'center'} alignItems={'center'} pt={{ base: '50px', md: '60px' }}>
        <Container maxW={'md'} p='20px'>
          <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} gap={4}>
            {!showValidate ? (
              <>
                <VStack alignItems='flex-start' gap='10px'>
                  <Flex justifyContent={'flex-start'} maxH='200px' margin='0 auto'>
                    <Image src='/img/35.png' alt='Genera' />
                  </Flex>
                  <Heading as='h2'>Genera</Heading>
                  <Text size='lg'>
                    Necesitas un respaldo para saber que eres realmente tú quien maneja la cuenta :)
                  </Text>
                  <Input
                    h='60px'
                    placeholder='Su contraseña'
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
                <VStack alignItems='flex-start' gap='10px'>
                  <Flex justifyContent={'flex-start'} maxH='200px'>
                    <Image src='/img/31.png' alt='Verifica' />
                  </Flex>
                  <Heading as='h2'>Verifica</Heading>
                  <Text size='lg'>Comprobemos que recuerdas la contraseña.</Text>
                  <Input
                    h='60px'
                    placeholder='Ingrese nuevamente su contraseña'
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
        </Container>
      </Flex>
    </>
  );
};

export default Create;
