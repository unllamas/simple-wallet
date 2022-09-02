import { useState, useEffect, useRef } from 'react';
import {
  Flex,
  Box,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftAddon,
  Spinner,
  useToast,
} from '@chakra-ui/react';

// import { useAccountContext } from '../../../context/Account';

import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
// import Polygon from '../../Icon/Polygon';

// import { getPriceMaticToUsd } from '../../../pages/api/coingecko';

const Send = () => {
  // Chakra
  const toast = useToast();
  const toastIdRef = useRef();

  // Context
  // const { balance, sendTransaction, getGasPrice } = useAccountContext();

  const [loading, setLoading] = useState(false);
  const [toAddress, setToAddress] = useState(null);
  const [mount, setMount] = useState();
  const [price, setPrice] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);

  // useEffect(() => {
  //   // setLoading(true);
  //   async function init() {
  //     const gasPrice = await getGasPrice();
  //     const usdPrice = await getPriceMaticToUsd();
  //     gasPrice && setGasPrice(gasPrice);
  //     usdPrice && setPrice(usdPrice);
  //   }

  //   init();
  // }, [gasPrice, price]);

  // Send transaction
  const handleSendTransaction = async () => {
    // setLoading(true);
    // if (toAddress && mount) {
    //   const res = await sendTransaction(toAddress, mount);
    //   if (res.success) {
    //     setLoading(false);
    //     handleCloseModal();
    //   } else {
    //     setLoading(false);
    //     if (res.error.code === 'INSUFFICIENT_FUNDS') {
    //       toastIdRef.current = toast({
    //         description: 'No posee fondos suficientes',
    //         status: 'warning',
    //       });
    //     }
    //   }
    // }
  };

  // const handleCloseModal = () => {
  //   setMount('');
  //   setGasPrice('');
  //   onClose();
  // };

  return (
    <ModalContent bg='#fff'>
      <ModalHeader>Send</ModalHeader>
      <ModalCloseButton />
      <ModalBody pt='20px' display='flex' w='100%' h='100%' flexDirection='column' justifyContent='space-between'>
        <Flex flexDirection='column' justifyContent='space-between' flex='1'>
          <Flex flexDirection='column' gap='10px'>
            <Box position='relative'>
              <Input pr='80px' placeholder='Address' onChange={(e) => setToAddress(e.target.value)} />
              <Flex position='absolute' zIndex={1} right='10px' top='0' h='100%' alignItems={'center'}>
                <Button color='secondary' size='sm'>
                  Paste
                </Button>
              </Flex>
            </Box>
            <Box>
              <InputGroup h='60px'>
                <InputLeftAddon h='60px' w='60px'>
                  {/* <Polygon /> */}
                  <Box w='25px' h='25px' borderRadius={50} bg='#ccc'></Box>
                </InputLeftAddon>
                <Input h='60px' type='number' placeholder='0.1' onChange={(e) => setMount(e.target.value)} />
              </InputGroup>
            </Box>
            <Flex justifyContent='space-between'>
              <Text fontWeight='bold'>Fee</Text>
              <Box textAlign='right'>
                <Text fontWeight='bold'>0 MATIC</Text>
                <Text>$0.0</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent='space-between' pt='40px'>
            <Text fontWeight='bold'>Total</Text>
            <Text fontWeight='bold'>$ 0.00</Text>
          </Flex>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => handleSendTransaction()} disabled={loading || !mount || !toAddress}>
          {loading ? <Spinner /> : 'Send'}
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default Send;
