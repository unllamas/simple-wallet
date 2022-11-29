import { useState, useEffect, useRef } from 'react';
import {
  Flex,
  Box,
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
  VStack,
} from '@chakra-ui/react';
import { BigNumber, ethers, FixedNumber } from 'ethers';
import { ArrowRight } from 'react-feather';
import QrReader from 'react-qr-scanner';
import QrScanner from 'qr-scanner';

import { useBlockchain } from '../../../context/Blockchain';
import { useToken } from '../../../context/Token';

import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import Text from '../../Shared/Text';
import Heading from '../../Shared/Heading';

import Token from '../../Token';

import IconQR from '../../Icons/QR';
import IconGas from '../../Icons/Gas';

import InputWithButton from '../../InputWithButton';
import InputWithToken from '../../InputWithToken';
import AddressBox from '../../AddressBox';

import { cryptoToUSD, formatPrice } from '../../../hooks/usePrice';

import { getPrice } from '../../../pages/api/thegraph';

const Send = ({ onClose }) => {
  // Chakra
  const toast = useToast();

  // Context
  const { getGasPrice } = useBlockchain();
  const { sendTransaction, tokens } = useToken();

  // Tokens
  const [tokenSelected, setTokenSelected] = useState('');
  const [totalTokensUSD, setTotalTokensUSD] = useState({
    eth: 0.0,
    dai: 0.0,
  });

  // Component
  const [loading, setLoading] = useState(false);
  const [toAddress, setToAddress] = useState('');
  const [mount, setMount] = useState('');

  // Price
  const [price, setPrice] = useState();
  const [gasPrice, setGasPrice] = useState();

  // Scan QR
  const [openScanQR, setOpenScanQR] = useState(false);

  useEffect(() => {
    // setLoading(true);
    async function init() {
      try {
        const gasPrice = await getGasPrice();
        const { success, data } = await getPrice();

        if (success) {
          const { eth, dai } = data;
          setGasPrice(gasPrice);
          setPrice(data);
          // setPriceETH(eth?.usd);

          setTotalTokensUSD({
            eth: cryptoToUSD(eth?.usd, tokens.eth),
            dai: cryptoToUSD(dai?.usd, tokens.dai),
          });
        }
      } catch (error) {
        console.log('err', error);
      }
    }

    !gasPrice && init();
  }, [gasPrice, totalTokensUSD]);

  // Send transaction
  const handleSendTransaction = async () => {
    const mountToToken = (Number(mount) * price.dai.usd) / price[tokenSelected].usd;

    setLoading(true);
    if (toAddress && mount) {
      const res = await sendTransaction(toAddress, mountToToken, tokenSelected);
      if (res?.success) {
        toast({ description: 'Transacción enviada', status: 'success' });
        setLoading(false);
        handleCloseModal();
      } else {
        setLoading(false);
        if (res?.error?.code === 'INSUFFICIENT_FUNDS') {
          toast({
            description: 'No tienes fondos suficientes',
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

  const handleChangeAddress = () => {
    setTokenSelected('');
    setToAddress('');
    setMount('');
  };

  const handleScan = (data) => {
    if (data) {
      setToAddress(data?.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <ModalContent bg='#111' overflow='hidden'>
      <Flex
        w='100%'
        h='60px'
        justifyContent='space-between'
        alignItems='center'
        px='20px'
        backgroundColor='#1A1A1A'
        borderBottom='1px solid #202020'
      >
        <Box>
          <Text>
            <strong>Enviar</strong>
          </Text>
          <Text opacity='.65'>
            Total {tokenSelected && `${tokenSelected.toUpperCase()}`} disponible:{' '}
            <strong>
              ${' '}
              {tokenSelected
                ? totalTokensUSD[tokenSelected].toFixed(2)
                : (totalTokensUSD?.eth + totalTokensUSD?.dai)?.toFixed(2)}
            </strong>
          </Text>
        </Box>
        <ModalCloseButton position='relative' top='0' left='0' />
      </Flex>
      <ModalBody pt='20px' p='0' display='flex' w='100%' flexDirection='column'>
        {openScanQR && !toAddress ? (
          <Box h='100%' flex='1' objectFit='fill'>
            <QrReader
              delay={100}
              style={{ height: '100%' }}
              onError={handleError}
              onScan={handleScan}
              facingMode='rear'
            />
          </Box>
        ) : (
          <Flex flexDirection='column' justifyContent='space-between' flex='1'>
            <Flex
              flexDirection='column'
              gap='10px'
              p='20px'
              justifyContent={tokenSelected ? 'space-between' : 'flex-start'}
              flex='1'
            >
              {/* Address and tokens */}
              {!tokenSelected ? (
                <>
                  <Flex gap='10px'>
                    <InputWithButton
                      placeholder='Address'
                      value={toAddress}
                      onChange={setToAddress}
                      onClick={setToAddress}
                    />
                    {QrScanner?.hasCamera() && (
                      <Box>
                        <Button color='default' onClick={() => setOpenScanQR(true)} disabled={toAddress}>
                          <IconQR />
                        </Button>
                      </Box>
                    )}
                  </Flex>
                  <Text opacity='.65'>
                    Al enviar <strong>siempre verifica</strong> que las direcciones pertenecen al ecosistema de
                    Ethereum.
                  </Text>

                  {/* Tokens */}
                  <Text fontWeight='bold' mt='20px'>
                    Elige un token:
                  </Text>
                  <Button color='blank' onClick={() => setTokenSelected('eth')} disabled={!toAddress}>
                    <Flex w='100%' alignItems='center' gap='20px' backgroundColor='#1F1F1F' borderRadius='8px' p='20px'>
                      <Token name='ETH' token={tokens?.eth} price={totalTokensUSD?.eth} p='0' />
                      <ArrowRight color='#B3E0B8' />
                    </Flex>
                  </Button>
                  <Button color='blank' onClick={() => setTokenSelected('dai')} disabled={!toAddress}>
                    <Flex alignItems='center' w='100%' gap='20px' backgroundColor='#1F1F1F' borderRadius='8px' p='20px'>
                      <Token name='DAI' token={tokens?.dai} price={totalTokensUSD?.dai} p='0' />
                      <ArrowRight color='#B3E0B8' />
                    </Flex>
                  </Button>
                </>
              ) : (
                <>
                  <Box>
                    <Flex w='100%' justifyContent='space-between' alignItems='center'>
                      <AddressBox title='Destino' address={toAddress} />
                      <Button size='sm' onClick={handleChangeAddress}>
                        Cambiar
                      </Button>
                    </Flex>

                    <Box mt='20px'>
                      <Text size='sm'>Monto</Text>
                      <Flex gap='10px' mt='4px'>
                        <Button color='default' fontSize='12px' disabled={true}>
                          Max
                        </Button>
                        <InputWithToken value={mount} onChange={(e) => setMount(e.target.value)} />
                      </Flex>
                    </Box>
                  </Box>

                  {/* Gas fee */}
                  <Flex justifyContent='space-between' mt='20px'>
                    <VStack>
                      <Flex gap='8px' w='100%'>
                        <IconGas />
                        <Text fontWeight='bold'>Gas</Text>
                      </Flex>
                      <Text size='sm' mt='0 !important'>
                        Comisión de red
                      </Text>
                    </VStack>
                    <Box textAlign='right'>
                      <Text fontWeight='bold'>${Number(gasPrice) * price?.eth || '0.00'}</Text>
                      <Text size='sm'>{Number(gasPrice).toFixed(7) || '0.00'} ETH</Text>
                    </Box>
                  </Flex>
                </>
              )}
            </Flex>

            {/* Total */}
            {tokenSelected && (
              <VStack p='20px 20px' gap='20px' bgImage='url(./background-send.png)' bgSize='cover'>
                <Flex w='100%' justifyContent='space-between'>
                  <Text fontWeight='bold'>Total</Text>
                  <Text fontWeight='bold'>
                    ${(Number(mount) * price.dai.usd + Number(gasPrice) * price[tokenSelected].usd).toFixed(2)}
                  </Text>
                </Flex>

                <Box w='100%'>
                  <Button
                    isBlock
                    type='secondary'
                    onClick={() => handleSendTransaction()}
                    disabled={loading || !mount || !toAddress}
                  >
                    {loading ? <Spinner /> : 'Enviar'}
                  </Button>
                </Box>
              </VStack>
            )}
          </Flex>
        )}
      </ModalBody>
    </ModalContent>
  );
};

export default Send;
