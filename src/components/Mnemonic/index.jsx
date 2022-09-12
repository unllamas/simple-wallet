import { Image, Flex, useToast, Input, Box } from '@chakra-ui/react';

import Item from './Item';

const Mnemonic = ({ mnemonic, onChange }) => {
  return (
    <Box>
      {/* Row */}
      <Flex mb='20px'>
        <Item number={1} defaultValue={mnemonic[0]} onChange={(e) => onChange(e.target.value, 0)} />
        <Item number={2} defaultValue={mnemonic[1]} onChange={(e) => onChange(e.target.value, 1)} />
        <Item number={3} defaultValue={mnemonic[2]} onChange={(e) => onChange(e.target.value, 2)} />
      </Flex>
      {/* Row */}
      <Flex mb='20px'>
        <Item number={4} defaultValue={mnemonic[3]} onChange={(e) => onChange(e.target.value, 3)} />
        <Item number={5} defaultValue={mnemonic[4]} onChange={(e) => onChange(e.target.value, 4)} />
        <Item number={6} defaultValue={mnemonic[5]} onChange={(e) => onChange(e.target.value, 5)} />
      </Flex>
      {/* Row */}
      <Flex mb='20px'>
        <Item number={7} defaultValue={mnemonic[6]} onChange={(e) => onChange(e.target.value, 6)} />
        <Item number={8} defaultValue={mnemonic[7]} onChange={(e) => onChange(e.target.value, 7)} />
        <Item number={9} defaultValue={mnemonic[8]} onChange={(e) => onChange(e.target.value, 8)} />
      </Flex>
      {/* Row */}
      <Flex mb='20px'>
        <Item number={10} defaultValue={mnemonic[9]} onChange={(e) => onChange(e.target.value, 9)} />
        <Item number={11} defaultValue={mnemonic[10]} onChange={(e) => onChange(e.target.value, 10)} />
        <Item number={12} defaultValue={mnemonic[11]} onChange={(e) => onChange(e.target.value, 11)} />
      </Flex>
    </Box>
  );
};

export default Mnemonic;
