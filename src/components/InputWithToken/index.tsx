import {
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';

import Input from '../Shared/Input';
import IconUSD from '../Icons/USD';

const InputWithToken = ({ value, onChange }) => {
  return (
    <InputGroup h='60px'>
      <Menu closeOnSelect={true}>
        <MenuButton
          as={InputLeftAddon}
          h='100%'
          px='11px'
          borderRadius='0'
          borderColor='#2C2C2C !important'
          backgroundColor='#1D1D1D'
          cursor='pointer'
        >
          <IconUSD />
        </MenuButton>
        {/* <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue={defaultToken} title='Token' type='radio' onChange={setDefaultToken}>
            <MenuItemOption value='ETH'>ETH</MenuItemOption>
            <MenuItemOption value='DAI'>DAI</MenuItemOption>
          </MenuOptionGroup>
        </MenuList> */}
      </Menu>
      <Input
        borderRadius='0 8px 8px 0 !important'
        h='60px'
        type='number'
        value={value}
        placeholder='0.00'
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default InputWithToken;
