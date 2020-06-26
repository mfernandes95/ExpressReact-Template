import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
`;

export const Image = styled.div`
  &.avatar {
    background: linear-gradient(208deg, #2d495f, #906235);
  }
`;

export const Formulario = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }

  input {
    width: 300px;
    font-size: 16px;
  }

  .MuiFormControl-root {
    margin-top: 5px;
  }

  span {
    margin-top: 4px;
    color: red;
  }

  .buttonEnv {
    margin-top: 25px;
  }

  .ButtonBack {
    background-color: transparent !important;
    border: 1px solid #1a75ff;

    span {
      color: #1a75ff !important;
    }
  }

  button {
    width: 300px;
    height: 35px;
    background: #1a75ff;
    outline: 0;
    transition: 0.2s;

    span {
      margin: -4px;
      color: #fff;
    }
  }

  button:hover {
    background-color: ${darken(0.09, "#1a75ff")};
  }

  .MuiInputBase-input {
    padding: 6px 3px 7px;
  }
`;
