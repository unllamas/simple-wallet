// @ts-nocheck
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';

import { BlockchainWrapper } from '../context/Blockchain';
import { AccountWrapper } from '../context/Account';
import { TokenWrapper } from '../context/Token';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BlockchainWrapper>
        <AccountWrapper>
          <TokenWrapper>
            <Component {...pageProps} />
          </TokenWrapper>
        </AccountWrapper>
      </BlockchainWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
