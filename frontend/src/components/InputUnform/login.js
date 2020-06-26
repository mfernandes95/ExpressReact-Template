import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "./styles";

export default function Input({ name, value, onChange, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <Wrapper>
      {error ? (
        <TextField
          error
          id="standard-error"
          helperText={error}
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <TextField
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          {...rest}
        />
      )}
    </Wrapper>
  );
}
