import styled from "styled-components";

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 777;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 300px;
  background: #fff;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #ffd633;
`;
export const CloseIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const ButtonCreate = styled.button`
  border: none;
  background-color: #ffd633;
  width: 97px;
  height: 37px;
  border: none;
  border-radius: 18px;
  color: #fff;
  font-size: 16px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
`;
export const ButtonCancel = styled.button`
  background-color: #bfbfbf;
  width: 97px;
  height: 37px;
  border: none;
  border-radius: 18px;
  color: #fff;
  font-size: 16px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  padding: 4px 16px;
`;
export const ClearIcon = styled.img`
  width: 40px;
`;
export const BackgroundButton = styled.button`
  background-color: #fff;
  border: none;
`;
export const Pluss = styled.img`
  width: 33px;
`;
