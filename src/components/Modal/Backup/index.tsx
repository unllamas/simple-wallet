import { Flex, ModalContent, ModalBody } from '@chakra-ui/react';

import Link from '../../Shared/Link';
import Text from '../../Shared/Text';
import Heading from '../../Shared/Heading';
import Image from '../../Shared/Image';

const Backup = () => {
  return (
    <ModalContent bg='#111'>
      <ModalBody p='40px 20px' display='flex' w='100%' flexDirection='column' alignItems='initial' gap='20px'>
        <Flex flex='1' flexDirection='column' gap='20px' justifyContent='center' mb='20px'>
          <Flex flexDirection='column' alignItems='center' gap='20px' textAlign='center'>
            <Flex maxW='200px'>
              <Image src='/congrats.png' alt='Felicitaciones' />
            </Flex>
            <Heading as='h2'>Felicitaciones!</Heading>
            <Text opacity='.65'>
              Asegúrate de guardar bien tu frase semilla, es la única forma de recuperar tus fondos.
            </Text>
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
