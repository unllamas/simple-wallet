import { Heading as HeadingBox } from '@chakra-ui/react';

const Heading = (props) => {
  const { children, as = 'h1' } = props;

  const variants = {
    h1: {
      fontSize: {
        base: '48px',
        md: '68px',
      },
      lineHeight: {
        base: '48px',
        md: '68px',
      },
    },
    h2: {
      fontSize: {
        base: '42px',
        md: '54px',
      },
      lineHeight: {
        base: '42px',
        md: '54px',
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
  };

  return (
    <HeadingBox color='#242424' {...props} {...variants[as]}>
      {children}
    </HeadingBox>
  );
};

export default Heading;
