import React, { useMemo } from "react";
import { ErrorText } from "components/modal/modalStyle";
import {
  WrapperForInput,
  InputAddStyle,
  ImputWidth,
} from "components/input/inputStyle";

const Input = ({ error, value, touched, onChange, placeholder, ...props }) => {
  const hasError = useMemo(() => error && touched, [error, touched]);

  return (
    <WrapperForInput>
      <ImputWidth>
        <InputAddStyle
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        {hasError && <ErrorText>{error}</ErrorText>}
      </ImputWidth>
    </WrapperForInput>
  );
};

export default Input;
