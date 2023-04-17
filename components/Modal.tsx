import React from "react";
import { ModalOverlay, ModalWrapper, ModalHeader, ModalTitle, ModalCloseButton, ModalBody } from "../styles/Modal";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalWrapper data-testid="character-modal">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
