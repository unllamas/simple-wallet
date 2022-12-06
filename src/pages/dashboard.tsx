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
  Text as TextBox,
} from '@chakra-ui/react';
import { RefreshCw, ArrowDown, ArrowUp, Lock, Unlock, ArrowRight, Check } from 'react-feather';

import { useBlockchain } from '../context/Blockchain';
import { useAccount } from '../context/Account';
import { useToken } from '../context/Token';

import { Container } from '../components/Container';
import Modal from '../components/Modal';
import Heading from '../components/Shared/Heading';
import Text from '../components/Shared/Text';
import Button from '../components/Shared/Button';
import Link from '../components/Shared/Link';

import IconETH from '../components/Icons/ETH';
import IconDAI from '../components/Icons/DAI';

import Token from '../components/Token';

import { cryptoToUSD, formatPrice } from '../hooks/usePrice';
import bigNumberTokenToString from '../hooks/useUtils';

import { getPrice } from './api/thegraph';

export async function getStaticProps() {
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
  const { tokens } = useToken();

  // Component
  const [priceETH, setPETH] = useState(cryptoToUSD(price?.eth?.usd, tokens?.eth));
  const [priceDAI, setPDAI] = useState(cryptoToUSD(price?.dai?.usd, tokens?.dai));
  const [total, setTotal] = useState(priceETH + priceDAI);

  // General
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    async function handleGetPrice() {
      const { success, data } = await getPrice();

      if (success) {
        const { eth, dai } = data;
        const priceETH = cryptoToUSD(eth?.usd, tokens?.eth);
        const priceDAI = cryptoToUSD(dai?.usd, tokens?.dai);

        setPETH(priceETH);
        setPDAI(priceDAI);

        setTotal(priceETH + priceDAI);
      }
    }

    handleGetPrice();
  }, [tokens?.eth, tokens?.dai]);

  const handleOpenModal = (name) => {
    setModalType(name);
    onOpen();
  };

  return (
    <>
      <Head>
        <title>Wallet - Sallet</title>
      </Head>
      <VStack h='100%' justifyContent={hasSaveMnemonic ? 'center' : 'flex-start'} alignItems={'center'} pt='20px'>
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
                <Button color='secondary' type='circle' onClick={() => handleOpenModal('send')} label='Enviar'>
                  <ArrowUp />
                </Button>
              </Flex>
              <Flex px='20px' justifyContent={'center'}>
                <Button type='circle' onClick={() => handleOpenModal('receive')} label='Recibir'>
                  <ArrowDown />
                </Button>
              </Flex>
              {/* <Flex justifyContent={'center'}>
                <Button type='circle' color='secondary' label='Swap'>
                  <RefreshCw />
                </Button>
              </Flex> */}
            </Flex>
          </Flex>

          {/* Tokens */}
          <VStack backgroundColor='#1F1F1F' borderRadius='8px'>
            <Token name='ETH' token={tokens?.eth} price={priceETH} />
            <Box borderTop='2px solid #111111' w='100%' mt='0 !important'>
              <Token name='DAI' token={tokens?.dai} price={priceDAI} />
            </Box>
          </VStack>
        </Container>

        {/* Security */}
        {!hasSaveMnemonic && (
          <VStack
            gap='20px'
            w='100%'
            maxW={{ base: '100%', md: '408px' }}
            p='30px'
            alignItems='initial'
            mt='20px !important'
            bgImage='url(/background-backup.png)'
            bgSize='cover'
          >
            <VStack gap='10px'>
              <Flex w='100%' gap='10px' alignItems='center'>
                <Unlock color='#DBA2A3' opacity={0.65} />
                <Heading as='h2' fontWeight='bold'>
                  Frase semilla
                </Heading>
              </Flex>
              <Text size='lg' mt='0'>
                Es muy importante que guardes bien esta <TextBox as='b'>frase semilla</TextBox>, ya que es la{' '}
                <TextBox as='b'>llave principal a sus cripto-activos</TextBox>.
              </Text>
            </VStack>
            <Link href='/settings/backup' color='terciary' passHref>
              Guardar frase semilla
            </Link>
          </VStack>
        )}
      </VStack>

      <Modal type={modalType} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Dashboard;
