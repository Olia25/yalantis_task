import Portal from "components/portal/Portal";
import React from "react";
import {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseIcon,
} from "components/modal/modalStyle";
import Close from "assets/icons/close.svg";

const Modal = ({ title, children, action }) => {
  return (
    <Portal>
      <ModalBackground>
        <ModalWrapper>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <CloseIcon src={Close} alt="close" onClick={action} />
          </ModalHeader>
          {children}
        </ModalWrapper>
      </ModalBackground>
    </Portal>
  );
};

export default Modal;
