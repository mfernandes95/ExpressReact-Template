import styled from "styled-components";
import { darken } from "polished";

export const Formulario = styled.div`
  background-color: "#555";

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    span {
      color: red;
    }
  }

  p {
    color: #777;
    cursor: pointer;
  }

  p:hover {
    color: ${darken(0.09, "#777")};
  }

  .MuiFormControl-root {
    width: 300px;
  }

  .MuiInputBase-input {
    padding: 6px 3px 7px;
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
`;
