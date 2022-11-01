import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>Sallet - Wallet non custodial</title>
          <meta
            name='description'
            content='Aceptar cripto-activos nunca fue tan facil. Recibe pagos internacionales en tan solo 30 segundos.'
          />
          <meta name='robots' content='index,follow' />

          <meta property='og:title' content='Sallet - Wallet non custodial' />
          <meta property='og:description' content='Recibe pagos internacionales en tan solo 30 segundos.' />
          <meta property='og:locale' content='es_ES' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/img/social/facebook-1200x630.jpg' />
          <meta property='og:url' content='https://sallet.app' />

          <meta name='twitter:title' content='Sallet - Wallet non custodial' />
          <meta name='twitter:description' content='Recibe pagos internacionales en tan solo 30 segundos.' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/img/social/twitter-600x330.jpg' />
          <meta name='twitter:url' content='https://sallet.app' />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
