import { Modal as ModalBox, ModalOverlay } from '@chakra-ui/react';

import Receive from './Receive';
import Send from './Send';

interface Modal {
  type: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = (props: Modal) => {
  const { type, isOpen, onClose } = props;

  if (!type) return;

  return (
    <ModalBox isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size={{ base: 'full', md: 'sm' }}>
      <ModalOverlay />
      {type === 'receive' && <Receive />}
      {type === 'send' && <Send />}
    </ModalBox>
  );
};

export default Modal;
