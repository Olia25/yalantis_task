import React from "react";
import { Formik } from "formik";
import { addNewProduct } from "helper/shapes";
import Input from "components/input/Input";
import {
  ErrorText,
  ButtonCreate,
  ButtonCancel,
  ClearIcon,
  BackgroundButton,
} from "components/modal/modalStyle";
import { WrapperInput, WrapperBtn } from "components/input/inputStyle";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setOrigins } from "redux/origins/selectors";
import Clear from "assets/icons/clear.png";

const Form = ({
  titleButton,
  initialValues,
  formFunc,
  closeModal,
  productId,
}) => {
  const dispatch = useDispatch();
  const origins = useSelector(setOrigins);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addNewProduct.schema}
      onSubmit={(values) => {
        formFunc(values, dispatch, productId);
        dispatch(closeModal);
      }}
    >
      {({
        values,
        errors,
        dirty,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        handleReset,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <WrapperInput>
            <Input
              name="name"
              placeholder="name"
              error={errors.name}
              value={values.name}
              onBlur={handleBlur}
              touched={touched.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </WrapperInput>
          <WrapperInput>
            <Input
              name="price"
              type="number"
              onBlur={handleBlur}
              value={values.price}
              error={errors.price}
              touched={touched.price}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </WrapperInput>
          <WrapperInput>
            <Select
              getOptionLabel={(option) => option.displayName}
              name="origin"
              options={origins}
              onBlur={handleBlur}
              placeholder="Select Origins"
              error={errors.origin}
              touched={touched.origin}
              onChange={(option) => setFieldValue("origin", option.value)}
              value={
                origins
                  ? origins.find((options) => options.value === values.origin)
                  : ""
              }
              disabled={isSubmitting}
              theme={(theme) => ({
                ...theme,
                borderRadius: "2px",
                colors: {
                  ...theme.colors,
                  primary25: "white",
                  primary: "#ffd633",
                },
              })}
            />
          </WrapperInput>
          {errors.origin !== undefined && (
            <ErrorText>{errors.origin}</ErrorText>
          )}
          <WrapperBtn>
            <ButtonCancel type="reset" onClick={() => dispatch(closeModal)}>
              Cancel
            </ButtonCancel>
            <BackgroundButton
              type="button"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              <ClearIcon src={Clear} alt="clear" />
            </BackgroundButton>
            <ButtonCreate type="submit" disabled={isSubmitting}>
              {titleButton}
            </ButtonCreate>
          </WrapperBtn>
        </form>
      )}
    </Formik>
  );
};

export default Form;
