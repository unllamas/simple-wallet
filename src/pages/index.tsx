import { useRouter } from 'next/router';

import { useAccount } from '../context/Account';

import Container from 'src/components/Layout/Container';
import ScreenView from 'src/components/Layout/ScreenView';
import Heading from 'src/components/Shared/Heading';
import Text from 'src/components/Shared/Text';
import Flex from 'src/components/Shared/Flex';
import Divider from 'src/components/Shared/Divider';
import Link from 'src/components/Shared/Link';

import Navbar from 'src/components/Layout/Navbar';

const Index = () => {
  const router = useRouter();

  // Context
  const { wallet } = useAccount();

  if (wallet?.account) {
    router.push('/dashboard');
    return false;
  }

  return (
    <>
      <Navbar />
      <ScreenView justify='center'>
        <Container size='small'>
          <Flex direction={'column'} align='center'>
            <Heading as='h1' align='center'>
              Aceptar cripto-activos nunca fue tan fácil.
            </Heading>
            <Text size='large' align='center'>
              Ten el control total de tus finanzas. <br />
              <strong>Wallet non-custodial</strong> para <strong>ETH</strong>.
            </Text>
            <Divider y={16} />
            <Flex direction={{ base: 'column-reverse', md: 'row' }} gap={8}>
              <Link href='/signin' type='bezeled' passHref>
                Ya tengo una billetera
              </Link>
              <Link href='/create' passHref>
                Crear billetera
              </Link>
            </Flex>
          </Flex>
        </Container>
      </ScreenView>
    </>
  );
};

export default Index;
