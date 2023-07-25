import { Flex, Box } from '@chakra-ui/react';

import InputMnemonic from 'src/components/Shared/InputMnemonic';

const Mnemonic = ({ mnemonic, handleChange, readOnly }) => {
  return (
    <Box>
      {/* Row */}
      <Flex mb='20px'>
        <InputMnemonic
          number={1}
          defaultValue={mnemonic[0]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 0)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={2}
          defaultValue={mnemonic[1]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 1)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={3}
          defaultValue={mnemonic[2]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 2)}
          readOnly={readOnly}
        />
      </Flex>
      {/* Row */}
      <Flex mb='20px'>
        <InputMnemonic
          number={4}
          defaultValue={mnemonic[3]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 3)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={5}
          defaultValue={mnemonic[4]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 4)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={6}
          defaultValue={mnemonic[5]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 5)}
          readOnly={readOnly}
        />
      </Flex>
      {/* Row */}
      <Flex mb='20px'>
        <InputMnemonic
          number={7}
          defaultValue={mnemonic[6]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 6)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={8}
          defaultValue={mnemonic[7]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 7)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={9}
          defaultValue={mnemonic[8]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 8)}
          readOnly={readOnly}
        />
      </Flex>
      {/* Row */}
      <Flex mb='20px'>
        <InputMnemonic
          number={10}
          defaultValue={mnemonic[9]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 9)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={11}
          defaultValue={mnemonic[10]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 10)}
          readOnly={readOnly}
        />
        <InputMnemonic
          number={12}
          defaultValue={mnemonic[11]}
          onChange={(e) => !readOnly && handleChange(e.target.value, 11)}
          readOnly={readOnly}
        />
      </Flex>
    </Box>
  );
};

export default Mnemonic;
