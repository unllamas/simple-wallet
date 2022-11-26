import { Text as TextBox } from '@chakra-ui/react';

const Text = (props) => {
  const { children, size = 'md' } = props;

  const variants = {
    xl: {
      fontSize: '36px',
      lineHeight: '46px',
    },
    lg: {
      fontSize: '24px',
      lineHeight: '34px',
    },
    md: {
      fontSize: '16px',
      lineHeight: '22px',
    },
    sm: {
      opacity: 0.65,
      fontSize: '12px',
      lineHeight: '18px',
    },
  };

  return (
    <TextBox m='0px' color='#fff' {...props} {...variants[size]}>
      {children}
    </TextBox>
  );
};

export default Text;
