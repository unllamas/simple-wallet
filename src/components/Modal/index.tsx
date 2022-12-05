import { Modal as ModalBox, ModalOverlay } from '@chakra-ui/react';
import { hotjar } from 'react-hotjar';

import Receive from './Receive';
import Send from './Send';
import Backup from './Backup';

interface Modal {
  type: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = (props: Modal) => {
  const { type, isOpen, onClose } = props;

  if (!type) return;

  // Event for Hotjar
  if (isOpen) {
    hotjar.event(`open-${type}-modal`);
  }

  return (
    <ModalBox isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size={{ base: 'full', md: 'sm' }}>
      <ModalOverlay bgColor='rgba(1,1,1,.9)' />
      {type === 'receive' && <Receive />}
      {type === 'send' && <Send onClose={onClose} />}
      {type === 'backup' && <Backup />}
    </ModalBox>
  );
};

export default Modal;
