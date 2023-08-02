// @ts-nocheck
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useToast, Link as LinkBox, Spinner } from '@chakra-ui/react';

import { useAccount } from 'src/context/Account';

import Navbar from 'src/components/Layout/Navbar';
import Container from 'src/components/Layout/Container';
import ScreenView from 'src/components/Layout/ScreenView';
import Button from 'src/components/Shared/Button';
import Link from 'src/components/Shared/Link';
import Flex from 'src/components/Shared/Flex';
import Divider from 'src/components/Shared/Divider';
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
      } else {
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

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ScreenView justify='center' align='center'>
        <Spinner />
      </ScreenView>
    );
  }

  return (
    <>
      <Head>
        <title>Ingresar - Sallet</title>
      </Head>
      <Navbar />
      <ScreenView justify='center'>
        <Container size='small'>
          {showMnemonic ? (
            <>
              <Heading as='h2'>Frase semilla</Heading>
              <Divider y={8} />
              <Text size='lg'>
                Ingresa tu frase semilla o reutiliza alguna de otras wallets non-custodial.{' '}
                <LinkBox color='#B3E0B8' textDecoration='underline'>
                  Te gustaria conocer las alternativas?
                </LinkBox>
              </Text>
              <Divider y={16} />
              {/* Mnemonic */}
              <Mnemonic mnemonic={temporalMnemonic} handleChange={handleChangeMnemonic} readOnly={false} />
            </>
          ) : (
            <>
              <Heading as='h2'>Contraseña</Heading>
              <Divider y={8} />
              <Text size='lg'>
                Si bien somos localfirst, necesitamos saber que eres realmente tu quien mueve fondos.
              </Text>
              <Divider y={16} />
              <Input
                h='60px'
                placeholder='Escriba su contraseña'
                value={password}
                onChange={(e) => handleSetPassword(e.target.value)}
              />
              <Divider y={8} />
              <Input
                h='60px'
                placeholder='Verifique su contraseña'
                value={validatePassword}
                onChange={(e) => handleSetValidatePass(e.target.value)}
                disabled={!showValidate}
              />
            </>
          )}
        </Container>
      </ScreenView>
      <Flex background='gray5'>
        <Container size='small'>
          <Divider y={16} />
          <Flex gap={8} direction={{ base: 'column-reverse', md: 'row' }}>
            {showMnemonic ? (
              <>
                <Link type='bezeledGray' href='/' passHref>
                  Cancelar
                </Link>
                <Button brand='secondary' onClick={handleLoginWallet} isDisabled={loading}>
                  {loading ? 'Cargando...' : 'Validar'}
                </Button>
              </>
            ) : (
              <>
                <Link type='bezeledGray' href='/' passHref>
                  Cancelar
                </Link>
                <Button isDisabled={!isValid || loading} onClick={handleConfirm}>
                  {loading ? 'Cargando...' : 'Continuar'}
                </Button>
              </>
            )}
          </Flex>
          <Divider y={16} />
        </Container>
      </Flex>
    </>
  );
};

export default Signup;
