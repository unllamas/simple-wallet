// @ts-nocheck
import { useState } from 'react';
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
        title: 'Incorrect password',
        description: 'Passwords do not match.',
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
      <Flex h='100%' justifyContent={'center'} alignItems={'center'} py='20px'>
        <Container maxW={'md'} h='100%' px='20px' bg='#fff'>
          {showMnemonic ? (
            <Flex flexDirection={'column'} justifyContent={{ base: 'space-between', md: 'center' }} h='100%' gap={4}>
              <VStack gap='10px' alignItems='flex-start'>
                <Flex justifyContent={'flex-start'}>
                  <Image src='/75x75.png' />
                </Flex>
                <Heading as='h2'>Write your seed phrase</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis libero
                  enim.
                </Text>

                {/* Mnemonic */}
                <Mnemonic mnemonic={temporalMnemonic} onChange={handleChangeMnemonic} />
              </VStack>

              <Flex w='100%' gap='10px' flexDirection={'column'}>
                <Button variant='solid' onClick={handleLoginWallet} disabled={loading}>
                  {loading ? 'Loading...' : 'Log in'}
                </Button>
                <Link color='secondary' href='/' passHref>
                  Cancel
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
                        <Image src='/75x75.png' />
                      </Flex>
                      <Heading as='h2'>Generate password</Heading>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis
                        libero enim.
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
                      Continue
                    </Button>
                    <Link color='secondary' href='/' passHref>
                      Cancel
                    </Link>
                  </Flex>
                </>
              ) : (
                <>
                  <VStack gap='20px'>
                    <VStack gap='10px' alignItems='flex-start'>
                      <Flex justifyContent={'flex-start'}>
                        <Image src='/75x75.png' />
                      </Flex>
                      <Heading as='h2'>Verify password</Heading>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis
                        libero enim.
                      </Text>
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
                      {loading ? 'Loading...' : 'Confirm'}
                    </Button>
                    <Link color='secondary' href='/' passHref>
                      Cancel
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
