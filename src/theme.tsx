import { extendTheme } from '@chakra-ui/react';

const General = {
  black: '#111111',
  white: '#F3F3F3',
};

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
  colors: {
    // brand
    primary: '#B3E0B8',
    primary15: '#B3E0B826',
    secondary: '#F5C365',
    secondary15: '#F5C36526',
    terciary: '#DBA2A3',
    terciary15: '#DBA2A326',
    // grays
    black: General.black,
    gray5: `${General.white}0C`,
    gray15: `${General.white}26`,
    gray25: `${General.white}3F`,
    gray35: `${General.white}59`,
    white: General.white,
    // validations
    error: '#FF7070',
    success: '#92C988',
    // general
    background: General.black,
    text: General.white,
  },
});

export default theme;
