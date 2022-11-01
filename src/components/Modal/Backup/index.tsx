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
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='20px'
      >
        <Flex flexDirection='column' gap='20px' justifyContent='center' mb='20px'>
          <Flex flexDirection='column' alignItems='center' gap='20px' textAlign='center'>
            <Flex>
              <Image src='/img/37.png' h='200px' />
            </Flex>
            <Heading as='h2'>Felicitaciones!</Heading>
            <Text>Asegúrate de guardar bien tu frase semilla, es la única forma de recuperar tus fondos.</Text>
          </Flex>
        </Flex>
        <Link href='/dashboard' isBlock>
          Ir al inicio
        </Link>
      </ModalBody>
    </ModalContent>
  );
};

export default Backup;
