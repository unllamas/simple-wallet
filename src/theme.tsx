import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
      },
      '#__next': {
        height: '100%',
      },
    },
  },
});

export default theme;
