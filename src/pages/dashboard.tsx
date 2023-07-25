import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ArrowDown, ArrowUp } from 'react-feather';

import { useAccount } from '../context/Account';
import { useToken } from '../context/Token';

import Text from '../components/Shared/Text';
import ButtonCircle from '../components/Shared/ButtonCircle';
import Link from '../components/Shared/Link';

import Navbar from 'src/components/Layout/Navbar';
import Container from 'src/components/Layout/Container';
import ScreenView from 'src/components/Layout/ScreenView';
import FullModal from 'src/components/FullModal';
import Flex from 'src/components/Shared/Flex';
import Divider from 'src/components/Shared/Divider';

import Token from '../components/Token';

import { cryptoToUSD, formatPrice } from '../hooks/usePrice';

// import { getPrice } from './api/thegraph';
import { getTest } from './api/coingecko';

export async function getStaticProps() {
  // const { success, data } = await getPrice();
  const { success, data } = await getTest();

  if (success) {
    return {
      props: {
        price: data,
      },
    };
  }
}

const Dashboard = ({ price }) => {
  const { wallet } = useAccount();
  const { tokens } = useToken();

  // Component
  const [priceETH, setPETH] = useState(cryptoToUSD(price?.ethereum?.usd, tokens?.eth));
  const [priceDAI, setPDAI] = useState(cryptoToUSD(price?.dai?.usd, tokens?.dai));
  const [total, setTotal] = useState(priceETH + priceDAI);

  // General
  const [modalType, setModalType] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  useEffect(() => {
    async function handleGetPrice() {
      const { success, data } = await getTest();

      if (success) {
        const { ethereum, dai } = data;
        const priceETH = cryptoToUSD(ethereum?.usd, tokens?.eth);
        const priceDAI = cryptoToUSD(dai?.usd, tokens?.dai);

        setPETH(priceETH);
        setPDAI(priceDAI);

        setTotal(priceETH + priceDAI);
      }
    }

    handleGetPrice();
  }, [tokens?.eth, tokens?.dai]);

  const handleOpenFullModal = (type) => {
    setTypeModal(type);
    setModalType(type);
    setOpenModal(true);
  };

  const handleCloseFullModal = () => {
    setOpenModal(false);
    setModalType('');
  };

  return (
    <>
      <Head>
        <title>Wallet - Sallet</title>
      </Head>
      <Navbar type={openModal ? 'modal' : 'page'} title={typeModal || ''} onClose={handleCloseFullModal} />
      <ScreenView justifyContent='center'>
        <Container size='small'>
          {/* Balance */}
          <Flex direction='column' align='center'>
            <Text size='small'>Su balance</Text>
            <Divider y={4} />
            <Text fontSize={32} isBold>
              ${formatPrice(Number(total).toFixed(2), 2)}
            </Text>
          </Flex>

          <Divider y={32} />

          {/* Botones */}
          <Flex justify='center'>
            <ButtonCircle brand='secondary' onClick={() => handleOpenFullModal('send')} title='Enviar'>
              <ArrowUp color='#111' />
            </ButtonCircle>
            <Divider x={16} />
            <ButtonCircle onClick={() => handleOpenFullModal('receive')} title='Recibir'>
              <ArrowDown color='#111' />
            </ButtonCircle>
          </Flex>

          <Divider y={32} />

          {/* Tokens */}
          <Token name='ethereum' token={tokens?.eth} price={priceETH} readOnly />
          <Token name='dai' token={tokens?.dai} price={priceDAI} readOnly />
        </Container>
      </ScreenView>

      {/* Security */}
      {wallet && !wallet?.saveMn && (
        <Flex background='terciary15'>
          <Container>
            <Divider y={16} />
            <Flex direction={{ base: 'column', md: 'row' }} align='normal' justify='center' gap={8}>
              <Flex align='center'>
                <Text>
                  Es muy importante que guardes bien esta <strong>frase semilla</strong>, ya que es la{' '}
                  <strong>llave principal a sus cripto-activos</strong>.
                </Text>
              </Flex>
              <Link href='/settings/backup' brand='terciary' passHref>
                Guardar frase semilla
              </Link>
            </Flex>
            <Divider y={16} />
          </Container>
        </Flex>
      )}

      <FullModal type={modalType} open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Dashboard;
