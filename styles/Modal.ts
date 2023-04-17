import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
`;

export const ModalBody = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;
