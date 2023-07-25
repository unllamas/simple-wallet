import { Heading as HeadingBox } from '@chakra-ui/react';

const Heading = (props) => {
  const { children, as = 'h1' } = props;

  const variants = {
    h1: {
      fontSize: {
        base: '32px',
        md: '42px',
      },
      lineHeight: {
        base: '38px',
        md: '50px',
      },
    },
    h2: {
      fontSize: {
        base: '26px',
        md: '32px',
      },
      lineHeight: {
        base: '32px',
        md: '38px',
      },
    },
    h3: {
      fontSize: {
        base: '22px',
        md: '26px',
      },
      lineHeight: {
        base: '28px',
        md: '32px',
      },
    },
    h4: {
      fontSize: '20px',
      lineHeight: '26px',
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    h6: {
      fontSize: '16px',
      lineHeight: '22px',
    },
  };

  return (
    <HeadingBox color='#fff' {...props} {...variants[as]}>
      {children}
    </HeadingBox>
  );
};

export default Heading;
