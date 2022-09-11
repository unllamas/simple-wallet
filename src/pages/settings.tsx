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

const Settings = () => {
  return (
    <>
      <Box w='100%' h='60px' bg='#eee' position='fixed' top={0} borderBottom='1px solid #ccc'></Box>
      <Flex height='100vh' w={'100vw'} justifyContent={'center'} alignItems={'center'} pt='20px'>
        <Container w='100%' maxW={'md'} px='20px'>
          {/* Security */}
          <Flex w='100%' mt='30px' alignItems={'center'} justifyContent={'space-between'}>
            <Heading as='h2'>Security</Heading>
            <Box>
              <Tag size='md'>Pending</Tag>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Settings;
