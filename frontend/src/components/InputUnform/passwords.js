import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import TextField from "@material-ui/core/TextField";

export default function InputPassword({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <div>
      {error ? (
        <TextField
          error
          id="standard-error-helper-text"
          inputRef={inputRef}
          {...rest}
          helperText={error}
        />
      ) : (
        <TextField inputRef={inputRef} {...rest} />
      )}
    </div>
  );
}
