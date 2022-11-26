import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: '"Merriweather", serif',
    body: '"Montserrat", sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        backgroundColor: '#111111',
        color: '#fff',
      },
      '#__next': {
        height: '100%',
      },
    },
  },
});

export default theme;
