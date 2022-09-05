import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import NextLink from 'next/link';
import { Image, Flex, Box, useDisclosure, Tag, Stat, StatLabel, StatNumber, VStack } from '@chakra-ui/react';
import { RefreshCw, ArrowDownRight, ArrowUpRight } from 'react-feather';

import { useBlockchain } from '../context/Blockchain';
import { useAccount } from '../context/Account';
import { useToken } from '../context/Token';

import { Container } from '../components/Container';
import Modal from '../components/Modal';
import Heading from '../components/Shared/Heading';
import Text from '../components/Shared/Text';
import Button from '../components/Shared/Button';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { wallet } = useAccount();
  const { tokenETH, tokenDAI } = useToken();

  // General
  const [modalType, setModalType] = useState('');

  const handleOpenModal = async (name) => {
    setModalType(name);
    onOpen();
  };

  return (
    <>
      <Box w='100%' h='60px' bg='#eee' position='fixed' top={0} borderBottom='1px solid #ccc'></Box>
      <Flex height='100vh' w={'100vw'} justifyContent={'center'} alignItems={'center'} pt='20px'>
        <Container w='100%' maxW={'md'} px='20px'>
          {/* Balance */}
          <Stat w='100%'>
            <StatLabel>Your balance</StatLabel>
            <StatNumber fontSize='32px'>$0.00</StatNumber>
          </Stat>

          {/* Botones */}
          <Flex w='100%' my='30px'>
            <Flex flex={1} justifyContent={'center'}>
              <Button type='circle' onClick={() => handleOpenModal('receive')} label='Receive'>
                <ArrowDownRight />
              </Button>
            </Flex>
            <Flex flex={1} justifyContent={'center'}>
              <Button type='circle' color='secondary' label='Swap'>
                <RefreshCw />
              </Button>
            </Flex>
            <Flex flex={1} justifyContent={'center'}>
              <Button type='circle' onClick={() => handleOpenModal('send')} label='Send'>
                <ArrowUpRight />
              </Button>
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
              <Text>{tokenETH || '0.0'}</Text>
              <Text size='sm' mt='0px !important'>
                ${tokenETH || '0.0'}
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
              <Text>{tokenDAI || '0.0'}</Text>
              <Text size='sm' mt='0px !important'>
                ${tokenDAI || '0.0'}
              </Text>
            </VStack>
          </Flex>

          {/* Security */}
          <Flex w='100%' mt='30px' alignItems={'center'} justifyContent={'space-between'}>
            <Heading as='h2'>Security</Heading>
            <Box>
              <Tag size='md'>Pending</Tag>
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Modal type={modalType} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Dashboard;
