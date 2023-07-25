import { useState, useEffect } from 'react';
import { Spinner, useToast } from '@chakra-ui/react';

import { useBlockchain } from 'src/context/Blockchain';
import { useToken } from 'src/context/Token';

import Button from 'src/components/Shared/Button';
import Text from 'src/components/Shared/Text';

import Token from 'src/components/Token';

import InputWithButton from 'src/components/InputWithButton';
import Navbar from 'src/components/Layout/Navbar';
import ScreenView from 'src/components/Layout/ScreenView';
import Container from 'src/components/Layout/Container';
import Flex from 'src/components/Shared/Flex';
import Input from 'src/components/Shared/Input';
import Hr from 'src/components/Shared/Hr';
import Divider from 'src/components/Shared/Divider';

import { cryptoToUSD } from 'src/hooks/usePrice';

// import { getPrice } from 'src/pages/api/thegraph';
import { getTest } from 'src/pages/api/coingecko';

import useKeyPress from 'src/hooks/useKeyPress';
import useTruncatedAddress from 'src/hooks/useTruncatedAddress';

const Component = ({ onClose }) => {
  // Chakra
  const toast = useToast();

  // Context
  const { getGasPrice } = useBlockchain();
  const { sendTransaction, tokens } = useToken();

  // Tokens
  const [tokenSelected, setTokenSelected] = useState(null);
  const [totalTokensUSD, setTotalTokensUSD] = useState({
    ethereum: 0.0,
    dai: 0.0,
  });

  // Component
  const [loading, setLoading] = useState(false);
  const [toAddress, setToAddress] = useState(null);
  const [mount, setMount] = useState(null);

  // Price
  const [price, setPrice] = useState();
  const [gasPrice, setGasPrice] = useState();

  useEffect(() => {
    // setLoading(true);
    async function init() {
      try {
        const gasPrice = await getGasPrice();
        const { success, data } = await getTest();

        if (success) {
          const { ethereum, dai } = data;
          setGasPrice(gasPrice);
          setPrice(data);
          // setPriceETH(eth?.usd);

          setTotalTokensUSD({
            ethereum: cryptoToUSD(ethereum?.usd, tokens.eth),
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
      console.log('res sendTransaction', res);
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

  const [step, setStep] = useState('address');

  const enterPress = useKeyPress('Enter');
  const escapePress = useKeyPress('Escape');

  //
  useEffect(() => {
    if (escapePress) {
      handleCloseModal();
    }
  }, [escapePress]);

  useEffect(() => {
    if (enterPress) {
      switch (step) {
        case 'address':
          toAddress && setStep('token');
          break;
        case 'token':
          tokenSelected && setStep('amount');
          break;
        case 'amount':
          setStep('sumary');
          break;
        case 'sumary':
          setStep('success');
          break;
      }
    }
  }, [enterPress]);

  const handleCloseModal = () => {
    setMount(null);
    setToAddress(null);
    setGasPrice(0);
    setLoading(false);
    setTokenSelected('');
    setStep('address');
    onClose();
  };

  const handleChangeAddress = () => {
    setTokenSelected('');
    setToAddress(null);
    setMount(null);
    setLoading(false);
    setStep('address');
  };

  const handleChangeToken = () => {
    setTokenSelected('');
    setStep('token');
    setLoading(false);
    setMount(null);
  };

  const handleChangeAmount = () => {
    setStep('amount');
    setLoading(false);
    setMount(null);
  };

  return (
    <>
      <Navbar type='modal' title='Testeando' onClose={handleCloseModal} />
      <ScreenView justifyContent='center'>
        <Container size='small'>
          <Flex direction='column' gap='10px'>
            {/* Step Account */}
            {step === 'address' ? (
              <>
                <InputWithButton
                  placeholder='Address'
                  value={toAddress}
                  onChange={setToAddress}
                  onClick={setToAddress}
                  // autoFocus
                />
                <Divider y={16} />
                <Text align='center'>
                  Al enviar <strong>siempre verifica</strong> que las direcciones pertenecen al ecosistema de Ethereum.
                </Text>
              </>
            ) : (
              <>
                <Flex justify='space-between' align='center'>
                  {/* <AddressBox title='Destino' address={toAddress} /> */}
                  <Text size='small'>Destino</Text>
                  <Flex align='center' justify='end' gap={8}>
                    <Text isBold>{useTruncatedAddress(toAddress)}</Text>
                    <div>
                      <Button size='small' type='bezeled' onClick={handleChangeAddress}>
                        Cambiar
                      </Button>
                    </div>
                  </Flex>
                </Flex>
                <Hr />
              </>
            )}

            {/* Step Token */}
            {step === 'token' ? (
              <>
                <Text size='large' isBold>
                  Que deseas enviar
                </Text>
                <Divider y={16} />
                <Token
                  name='ethereum'
                  token={tokens?.eth}
                  price={totalTokensUSD?.ethereum}
                  disabled={!toAddress}
                  onClick={setTokenSelected}
                  active={tokenSelected === 'ethereum'}
                />
                <Divider y={8} />
                <Token
                  name='dai'
                  token={tokens?.dai}
                  price={totalTokensUSD?.dai}
                  disabled={!toAddress}
                  onClick={setTokenSelected}
                  active={tokenSelected === 'dai'}
                />
              </>
            ) : (
              step !== 'address' && (
                <>
                  <Flex justify='space-between'>
                    <Text size='small'>Token</Text>
                    <Flex justify='end' align='center' gap={8}>
                      <Text isBold>{tokenSelected.toUpperCase()}</Text>

                      <div>
                        <Button size='small' type='bezeled' onClick={handleChangeToken}>
                          Cambiar
                        </Button>
                      </div>
                    </Flex>
                  </Flex>
                  <Hr />
                </>
              )
            )}

            {step === 'amount' ? (
              <>
                <Text size='large' isBold>
                  Cuanto deseas enviar
                </Text>
                <Divider y={16} />
                <Flex gap={8}>
                  <div>
                    <Button brand='secondary' type='bezeled' fontSize='12px'>
                      Max
                    </Button>
                  </div>
                  <Input autoFocus placeholder='0.00' iconLeft={'USD'} value={mount} handleChange={setMount} />
                  {/* <InputWithToken value={mount} onChange={(e) => setMount(e.target.value)} /> */}
                </Flex>
                <Divider y={8} />
                <Flex justify='center'>
                  <Text>Disponible: </Text>
                  <Text isBold>${Number(totalTokensUSD[tokenSelected]).toFixed(2)}</Text>
                </Flex>
              </>
            ) : (
              step !== 'address' &&
              step !== 'token' && (
                <>
                  <Flex justify='space-between'>
                    <Text size='small'>Monto</Text>
                    <Flex justify='end' align='center' gap={8}>
                      <Text isBold>USD {Number(mount)?.toFixed(2)}</Text>

                      <div>
                        <Button size='small' type='bezeled' onClick={handleChangeAmount}>
                          Cambiar
                        </Button>
                      </div>
                    </Flex>
                  </Flex>
                  <Hr />
                  <Flex justify='space-between'>
                    <Text size='small'>Comision</Text>
                    <Text isBold>USD {0.01}</Text>
                  </Flex>
                  <Hr />
                  <Flex justify='space-between'>
                    <Text size='large' isBold>
                      Total
                    </Text>
                    <Text size='large' isBold>
                      ${(Number(mount) * price.dai.usd + Number(gasPrice) * price[tokenSelected].usd).toFixed(2)}
                    </Text>
                  </Flex>
                </>
              )
            )}
          </Flex>
        </Container>
      </ScreenView>

      <Flex background='gray5'>
        <Container>
          <Divider y={16} />
          <Flex direction={{ base: 'column-reverse', md: 'row' }} justify={'center'} gap={8}>
            <Button type='bezeledGray' onClick={handleCloseModal}>
              Cancelar
            </Button>
            {step === 'address' && (
              <Button onClick={() => toAddress && setStep('token')} disabled={!toAddress}>
                {loading ? <Spinner /> : 'Continuar'}
              </Button>
            )}
            {step === 'token' && (
              <Button onClick={() => tokenSelected && setStep('amount')} disabled={!tokenSelected}>
                {loading ? <Spinner /> : 'Seleccionar'}
              </Button>
            )}
            {step === 'amount' && (
              <Button onClick={() => setStep('sumary')} disabled={!tokenSelected}>
                {loading ? <Spinner /> : 'Continuar'}
              </Button>
            )}
            {step === 'sumary' && (
              <Button brand='secondary' onClick={handleSendTransaction} disabled={!tokenSelected}>
                {loading ? <Spinner /> : 'Transferir'}
              </Button>
            )}
          </Flex>
          <Divider y={16} />
        </Container>
      </Flex>
    </>
  );
};

export default Component;
