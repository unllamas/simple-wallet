// @ts-nocheck
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { hotjar } from 'react-hotjar';

import theme from '../theme';
import { AppProps } from 'next/app';

import { BlockchainWrapper } from '../context/Blockchain';
import { AccountWrapper } from '../context/Account';
import { TokenWrapper } from '../context/Token';

function MyApp({ Component, pageProps }: AppProps) {
  // Init Hotjar
  useEffect(() => {
    hotjar.initialize(3238996, 6);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BlockchainWrapper>
        <AccountWrapper>
          <TokenWrapper>
            <Component {...pageProps} />
            <Analytics />
          </TokenWrapper>
        </AccountWrapper>
      </BlockchainWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
