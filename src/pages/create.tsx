import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Image, Flex, useToast, VStack } from '@chakra-ui/react';

import { useAccount } from '../context/Account';

import { Container } from '../components/Container';
import Button from '../components/Shared/Button';
import Link from '../components/Shared/Link';
import Input from '../components/Shared/Input';
import Text from '../components/Shared/Text';
import Heading from '../components/Shared/Heading';

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
        title: 'Incorrect password',
        description: 'Passwords do not match.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Create - Wallet</title>
      </Head>
      <Flex height='100%' justifyContent={'center'} alignItems={'center'}>
        <Container maxW={'md'} h='100%' p='20px' bg='#fff'>
          <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} gap={4} h='100%'>
            {!showValidate ? (
              <>
                <VStack alignItems='flex-start' gap='10px'>
                  <Flex justifyContent={'flex-start'}>
                    <Image src='/75x75.png' />
                  </Flex>
                  <Heading as='h2'>Generate password</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis
                    libero enim.
                  </Text>
                  <Input
                    h='60px'
                    placeholder='Your password'
                    value={password}
                    onChange={(e) => handleSetPassword(e.target.value)}
                  />
                </VStack>
                <Flex w='100%' gap='10px' flexDirection={'column'}>
                  <Button disabled={!password} onClick={handleContinue}>
                    Continue
                  </Button>
                  <Link color='secondary' href='/' passHref>
                    Cancel
                  </Link>
                </Flex>
              </>
            ) : (
              <>
                <VStack alignItems='flex-start' gap='10px'>
                  <Flex justifyContent={'flex-start'}>
                    <Image src='/75x75.png' />
                  </Flex>
                  <Heading as='h2'>Verify password</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis
                    libero enim.
                  </Text>
                  <Input
                    h='60px'
                    placeholder='Verify your password'
                    value={validatePassword}
                    onChange={(e) => handleSetValidatePass(e.target.value)}
                  />
                </VStack>
                <Flex w='100%' gap='10px' flexDirection={'column'}>
                  <Button variant='solid' disabled={!isValid || loading} onClick={handleConfirm}>
                    {loading ? 'Loading...' : 'Confirm'}
                  </Button>
                  <Link color='secondary' href='/' passHref>
                    Cancel
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
