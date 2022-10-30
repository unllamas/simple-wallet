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

import IconETH from '../components/Icons/ETH';
import IconDAI from '../components/Icons/DAI';

import { cryptoToUSD, formatPrice } from '../hooks/usePrice';
import bigNumberTokenToString from '../hooks/useUtils';

import { getPrice } from './api/thegraph';

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
  const [priceETH, setPETH] = useState(cryptoToUSD(price?.eth?.usd, tokenETH));
  const [priceDAI, setPDAI] = useState(cryptoToUSD(price?.dai?.usd, tokenETH));
  const [total, setTotal] = useState(priceETH + priceDAI);

  // General
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    async function handleGetPrice() {
      const { success, data } = await getPrice();

      if (success) {
        const { eth, dai } = data;
        const priceETH = cryptoToUSD(eth?.usd, tokenETH);
        const priceDAI = cryptoToUSD(dai?.usd, tokenDAI);

        setPETH(priceETH);
        setPDAI(priceDAI);

        setTotal(priceETH + priceDAI);
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
        <Container w='100%' justifyContent='center' maxW={'md'} px='20px'>
          {/* Balance */}
          <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='center'>
            <Stat flex='1'>
              <Text size='sm' textAlign={{ base: 'center', md: 'left' }}>
                Su balance
              </Text>
              <Text size='xl' fontWeight='bold' textAlign={{ base: 'center', md: 'left' }}>
                ${formatPrice(Number(total).toFixed(2), 2)}
              </Text>
            </Stat>

            {/* Botones */}
            <Flex my='30px'>
              <Flex px='20px' justifyContent={'center'}>
                <Button type='circle' onClick={() => handleOpenModal('receive')} label='Recibir'>
                  <ArrowDownRight />
                </Button>
              </Flex>
              {/* <Flex justifyContent={'center'}>
                <Button type='circle' color='secondary' label='Swap'>
                  <RefreshCw />
                </Button>
              </Flex> */}
              <Flex px='20px' justifyContent={'center'}>
                <Button type='circle' onClick={() => handleOpenModal('send')} label='Enviar'>
                  <ArrowUpRight />
                </Button>
              </Flex>
            </Flex>
          </Flex>

          {/* Tokens */}
          <Flex alignItems={'center'} justifyContent={'space-between'} w='100%' bg='#fff' p='20px'>
            <Flex alignItems={'center'} gap='10px'>
              <Box>
                <IconETH />
              </Box>
              <Text fontWeight='bold'>ETH</Text>
            </Flex>
            <VStack alignItems='flex-end'>
              <Text>{bigNumberTokenToString(tokenETH) || '0.00'}</Text>
              <Text size='sm' mt='0px !important'>
                ${Number(priceETH).toFixed(2)}
              </Text>
            </VStack>
          </Flex>
          <Flex mt='2px' alignItems={'center'} justifyContent={'space-between'} w='100%' bg='#fff' p='20px'>
            <Flex alignItems={'center'} gap='10px'>
              <Box>
                <IconDAI />
              </Box>
              <Text fontWeight='bold'>DAI</Text>
            </Flex>
            <VStack alignItems='flex-end'>
              <Text>{bigNumberTokenToString(tokenDAI) || '0.00'}</Text>
              <Text size='sm' mt='0px !important'>
                ${Number(priceDAI).toFixed(2)}
              </Text>
            </VStack>
          </Flex>

          {/* Security */}
          {hasSaveMnemonic ? (
            <Flex w='100%' mt='30px' alignItems={'center'} justifyContent={'space-between'}>
              <HStack>
                <Lock />
                <Heading as='h3'>Seguridad</Heading>
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
                  <Unlock color='#2B2A2B' opacity={0.65} />
                  <Heading as='h3'>Seguridad</Heading>
                </HStack>
                <HStack gap='10px'>
                  <Tag size='md' bg='#2B2A2B' color='#F8F1E8'>
                    Pendiente
                  </Tag>
                  <ArrowRight color='#2B2A2B' />
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
