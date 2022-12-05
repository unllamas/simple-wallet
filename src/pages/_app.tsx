// @ts-nocheck
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { hotjar } from 'react-hotjar';

import theme from '../theme';
import { AppProps } from 'next/app';

import { BlockchainWrapper } from '../context/Blockchain';
import { AccountWrapper } from '../context/Account';
import { TokenWrapper } from '../context/Token';

import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // Init Hotjar
  useEffect(() => {
    hotjar.initialize(3238996, 6);

    // Google Analytics
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

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
    </>
  );
}

export default MyApp;
