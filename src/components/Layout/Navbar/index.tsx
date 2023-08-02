import React from 'react';
import { Flex, HStack, Box, Image } from '@chakra-ui/react';

import { useAccount } from 'src/context/Account';

import Container from 'src/components/Layout/Container';
import Link from 'src/components/Shared/Link';
import Button from 'src/components/Shared/Button';
import Text from 'src/components/Shared/Text';
import Twitter from 'src/components/Shared/Icons/Twitter';
import Discord from 'src/components/Shared/Icons/Discord';

interface NavbarProps {
  title?: string;
  type?: 'page' | 'modal';
  onClose?: () => void;
}

const Component: React.FunctionComponent<NavbarProps> = ({ title, type = 'page', onClose }) => {
  // Context
  const { wallet } = useAccount();

  const isPage = type === 'page';

  return (
    <Flex w='100%'>
      <Container>
        <Flex w='100%' h={'60px'} alignItems='center' justifyContent='space-between'>
          <Flex alignItems={'center'} gap={4}>
            <Image src='/logo.svg' alt='Sallet.app' width={'111px'} height={'40px'} />
            {!isPage && (
              <>
                <Box width={'2px'} height={'30px'} bg='#F3F3F3' opacity={0.35} />
                <Text isBold>{title === 'receive' ? 'Recibir' : 'Enviar'}</Text>
              </>
            )}
          </Flex>

          <HStack display='flex' justifyContent='flex-end'>
            {isPage ? (
              wallet?.address ? (
                <>
                  <Button size='small' brand='secondary' type='bezeled'>
                    Ajustes
                  </Button>
                </>
              ) : (
                <>
                  <Link href='https://twitter.com/SalletApp' target='_blank' type='bezeled' size='small'>
                    <Twitter />
                  </Link>
                  <Link href='https://discord.gg/VCQuJ7cq' target='_blank' type='bezeled' size='small'>
                    <Discord />
                  </Link>
                </>
              )
            ) : (
              <Button size='small' type='borderless' onClick={onClose} tabIndex={1}>
                Cancelar
              </Button>
            )}
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Component;
