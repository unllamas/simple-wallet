import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';

import { BlockchainWrapper } from '../context/Blockchain';
import { AccountWrapper } from '../context/Account';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BlockchainWrapper>
        <AccountWrapper>
          <Component {...pageProps} />
        </AccountWrapper>
      </BlockchainWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
