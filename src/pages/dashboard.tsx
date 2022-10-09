import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  Image,
  Flex,
  Box,
  useDisclosure,
  Tag,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { RefreshCw, ArrowDownRight, ArrowUpRight, Lock, Unlock, ArrowRight, Check } from 'react-feather';

import { useBlockchain } from '../context/Blockchain';
import { useAccount } from '../context/Account';
import { useToken } from '../context/Token';

import { Container } from '../components/Container';
import Modal from '../components/Modal';
import Heading from '../components/Shared/Heading';
import Text from '../components/Shared/Text';
import Button from '../components/Shared/Button';

import { cryptoToUSD, formatPrice } from '../hooks/usePrice';
import bigNumberTokenToString from '../hooks/useUtils';

import { getPrice } from './api/coingecko';

export async function getServerSideProps() {
  const { success, data } = await getPrice();

  if (success) {
    return {
      props: {
        price: data,
      },
    };
  }
}

const Dashboard = ({ price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { hasSaveMnemonic } = useAccount();
  const { tokenETH, tokenDAI } = useToken();

  // Component
  const [pETH, setPETH] = useState(cryptoToUSD(price?.ethereum?.usd, tokenETH));
  const [pDAI, setPDAI] = useState(cryptoToUSD(price?.dai?.usd, tokenETH));

  const priceETH = cryptoToUSD(price?.ethereum?.usd, tokenETH);
  const priceDAI = cryptoToUSD(price?.dai?.usd, tokenDAI);
  const total = priceETH + priceDAI;

  // General
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    async function handleGetPrice() {
      const { success, data } = await getPrice();

      if (success) {
        setPETH(cryptoToUSD(data?.ethereum?.usd, tokenETH));
        setPDAI(cryptoToUSD(data?.dai?.usd, tokenETH));
      }
    }

    handleGetPrice();
  }, [tokenETH, tokenDAI]);

  const handleOpenModal = (name) => {
    setModalType(name);
    onOpen();
  };

  return (
    <>
      <Head>
        <title>Dashboard - Wallet</title>
      </Head>
      <Flex h='100%' justifyContent={'center'} alignItems={'center'} pt='20px'>
        <Container w='100%' maxW={'md'} px='20px'>
          {/* Balance */}
          <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='center' mb='30px'>
            <Stat flex='1'>
              <StatLabel>Your balance</StatLabel>
              <StatNumber fontSize='32px'>${formatPrice(Number(total).toFixed(2), 2)}</StatNumber>
            </Stat>

            {/* Botones */}
            <Flex my='30px'>
              <Flex px='20px' justifyContent={'center'}>
                <Button type='circle' onClick={() => handleOpenModal('receive')} label='Receive'>
                  <ArrowDownRight />
                </Button>
              </Flex>
              {/* <Flex justifyContent={'center'}>
                <Button type='circle' color='secondary' label='Swap'>
                  <RefreshCw />
                </Button>
              </Flex> */}
              <Flex px='20px' justifyContent={'center'}>
                <Button type='circle' onClick={() => handleOpenModal('send')} label='Send'>
                  <ArrowUpRight />
                </Button>
              </Flex>
            </Flex>
          </Flex>

          {/* Tokens */}
          <Flex alignItems={'center'} justifyContent={'space-between'} w='100%' bg='#eee' p='20px'>
            <Flex alignItems={'center'} gap='10px'>
              <Box>
                <Image src='./75x75.png' maxW='35px' borderRadius='50%' />
              </Box>
              <Text>ETH</Text>
            </Flex>
            <VStack alignItems='flex-end'>
              <Text>{bigNumberTokenToString(tokenETH, 7) || '0.00'}</Text>
              <Text size='sm' mt='0px !important'>
                ${Number(priceETH).toFixed(2)}
              </Text>
            </VStack>
          </Flex>
          <Flex mt='2px' alignItems={'center'} justifyContent={'space-between'} w='100%' bg='#eee' p='20px'>
            <Flex alignItems={'center'} gap='10px'>
              <Box>
                <Image src='./75x75.png' maxW='35px' borderRadius='50%' />
              </Box>
              <Text>DAI</Text>
            </Flex>
            <VStack alignItems='flex-end'>
              <Text>{bigNumberTokenToString(tokenDAI, 2) || '0.00'}</Text>
              <Text size='sm' mt='0px !important'>
                ${Number(priceDAI).toFixed(2)}
              </Text>
            </VStack>
          </Flex>
          <Text mt='8px' size='sm' textAlign='right'>
            Powered by{' '}
            <NextLink rel='nofollow' href='https://www.coingecko.com/' passHref>
              <Link fontWeight={600} target='_blank'>
                Coingecko
              </Link>
            </NextLink>
          </Text>

          {/* Security */}
          {hasSaveMnemonic ? (
            <Flex w='100%' mt='30px' alignItems={'center'} justifyContent={'space-between'}>
              <HStack>
                <Lock />
                <Heading as='h2'>Security</Heading>
              </HStack>
              <HStack gap='10px'>
                <Check />
              </HStack>
            </Flex>
          ) : (
            <NextLink href={!hasSaveMnemonic && '/settings/backup'}>
              <Flex
                w='100%'
                mt='15px'
                py='15px'
                alignItems={'center'}
                justifyContent={'space-between'}
                cursor='pointer'
              >
                <HStack>
                  <Unlock opacity={0.35} />
                  <Heading as='h2'>Security</Heading>
                </HStack>
                <HStack gap='10px'>
                  <Tag size='md'>Pending</Tag>
                  <ArrowRight />
                </HStack>
              </Flex>
            </NextLink>
          )}
        </Container>
      </Flex>

      <Modal type={modalType} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Dashboard;
