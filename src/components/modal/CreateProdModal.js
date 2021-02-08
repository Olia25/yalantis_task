import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "redux/ui/actions";
import Modal from "components/modal/Modal";
import { BackgroundButton, Pluss } from "components/modal/modalStyle";
import { selectCreateOpenModal } from "redux/ui/selectors";
import Form from "components/form/Form";
import Plus from "assets/icons/plus.png";
import React from "react";
import { addNewProduct } from "helper/shapes";
import { postProduct } from "helper/apiRequest/postProduct";

const CreateProdModal = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectCreateOpenModal);
  return (
    <>
        <BackgroundButton
          onClick={() => dispatch(uiActions.createModal.open())}
        >
          <Pluss src={Plus} alt="plus" />
        </BackgroundButton>
      {openModal && (
        <Modal
          title="Create Product"
          action={() => dispatch(uiActions.createModal.close())}
        >
          <Form
            titleButton="Create"
            initialValues={addNewProduct.shape}
            closeModal={uiActions.createModal.close()}
            formFunc={postProduct}
          />
        </Modal>
      )}
    </>
  );
};

export default CreateProdModal;
