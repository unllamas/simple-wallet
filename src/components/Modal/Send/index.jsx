import { useState, useEffect } from 'react';
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
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';

import { useBlockchain } from '../../../context/Blockchain';
import { useToken } from '../../../context/Token';

import Button from '../../Shared/Button';
import Input from '../../Shared/Input';

import IconETH from '../../Icons/ETH';
import IconDAI from '../../Icons/DAI';

import { getPrice } from '../../../pages/api/coingecko';

const Send = ({ onClose }) => {
  // Chakra
  const toast = useToast();

  // Context
  const { getGasPrice } = useBlockchain();
  const { sendTransaction } = useToken();

  // Component
  const [loading, setLoading] = useState(false);
  const [toAddress, setToAddress] = useState('');
  const [mount, setMount] = useState();

  const [price, setPrice] = useState({});
  const [gasPrice, setGasPrice] = useState();

  const [defaultToken, setDefaultToken] = useState('ethereum');

  useEffect(() => {
    // setLoading(true);
    async function init() {
      try {
        const gasPrice = await getGasPrice();
        const { data } = await getPrice();
        setGasPrice(gasPrice);
        setPrice(data);
      } catch (error) {
        console.log('err', error);
      }
    }

    !gasPrice && init();
  }, [gasPrice, price]);

  if (!gasPrice) return null;

  // Send transaction
  const handleSendTransaction = async () => {
    setLoading(true);
    if (toAddress && mount) {
      const res = await sendTransaction(toAddress, mount, defaultToken);
      if (res?.success) {
        toast({ description: 'Transaction sent', status: 'success' });
        setLoading(false);
        handleCloseModal();
      } else {
        setLoading(false);
        if (res?.error?.code === 'INSUFFICIENT_FUNDS') {
          toast({
            description: "You don't have enough funds",
            status: 'warning',
          });
        }
      }
    }
  };

  const handleCloseModal = () => {
    setMount('');
    setGasPrice(0);
    onClose();
  };

  const handlePasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setToAddress(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <ModalContent bg='#fff'>
      <ModalHeader>Send</ModalHeader>
      <ModalCloseButton />
      <ModalBody pt='20px' display='flex' w='100%' h='100%' flexDirection='column' justifyContent='space-between'>
        <Flex flexDirection='column' justifyContent='space-between' flex='1'>
          <Flex flexDirection='column' gap='10px'>
            <Box position='relative'>
              <Input pr='80px' placeholder='Address' value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
              <Flex position='absolute' zIndex={1} right='10px' top='0' h='100%' alignItems={'center'}>
                <Button color='secondary' size='sm' onClick={() => handlePasteAddress()} disabled={toAddress}>
                  Paste
                </Button>
              </Flex>
            </Box>
            <Box>
              <InputGroup h='60px'>
                <Menu closeOnSelect={true}>
                  <MenuButton as={InputLeftAddon} cursor='pointer' h='100%'>
                    <Box h='32px' w='32px' bg='#fff' borderRadius={50}>
                      {defaultToken === 'ethereum' ? <IconETH /> : <IconDAI />}
                    </Box>
                  </MenuButton>
                  <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue={defaultToken} title='Token' type='radio' onChange={setDefaultToken}>
                      <MenuItemOption value='ethereum'>ETH</MenuItemOption>
                      <MenuItemOption value='dai'>DAI</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
                <Input h='60px' type='number' placeholder='0.1' onChange={(e) => setMount(e.target.value)} />
              </InputGroup>
            </Box>
            <Flex justifyContent='space-between'>
              <Text fontWeight='bold'>Fee</Text>
              <Box textAlign='right'>
                <Text fontWeight='bold'>{Number(gasPrice).toFixed(7) || '0.00'} ETH</Text>
                <Text>${(Number(gasPrice) * Number(price[defaultToken]?.usd)).toFixed(2) || '0.00'}</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent='space-between' pt='40px'>
            <Text fontWeight='bold'>Total</Text>
            <Text fontWeight='bold'>
              $
              {mount
                ? (
                    Number(mount) * Number(price[defaultToken]?.usd) +
                    Number(gasPrice) * Number(price[defaultToken]?.usd)
                  ).toFixed(2)
                : Number(0).toFixed(2)}
            </Text>
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
