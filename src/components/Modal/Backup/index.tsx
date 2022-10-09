import { Flex, ModalContent, ModalBody, Image } from '@chakra-ui/react';

import Link from '../../Shared/Link';
import Text from '../../Shared/Text';
import Heading from '../../Shared/Heading';

const Backup = () => {
  return (
    <ModalContent bg='#fff'>
      <ModalBody
        p='40px 20px'
        display='flex'
        w='100%'
        h='100%'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        gap='20px'
      >
        <Flex flexDirection='column' gap='20px' flex='1' justifyContent='center'>
          <Flex flexDirection='column' alignItems='center' gap='20px' textAlign='center'>
            <Flex>
              <Image src='/150x150.png' />
            </Flex>
            <Heading as='h2'>Congratulations!</Heading>
            <Text>Make sure you save your seed phrase well, it's the only way to get your funds back.</Text>
          </Flex>
        </Flex>
        <Flex maxW={{ base: '100%', md: '256px' }} w='100%'>
          <Link href='/dashboard' passHref>
            Go to home
          </Link>
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

export default Backup;
