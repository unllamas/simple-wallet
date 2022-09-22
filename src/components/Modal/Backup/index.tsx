import { Flex, ModalContent, ModalBody, Image } from '@chakra-ui/react';

import Link from '../../Shared/Link';
import Text from '../../Shared/Text';
import Heading from '../../Shared/Heading';

const Backup = () => {
  return (
    <ModalContent bg='#fff'>
      <ModalBody
        p='20px'
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis libero
              enim.
            </Text>
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
