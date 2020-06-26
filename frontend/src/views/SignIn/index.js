import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//PROJETO
import Input from "components/InputUnform/login";
import { signInRequest } from "store/modules/auth/actions";
//BIBLIOTECAS
import * as Yup from "yup";
import { Form } from "@unform/web";
//MATERIAL
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
//STYLES
import { Formulario } from "./styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function SignIn({ state }) {
  const formRef = useRef(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  //API POST
  async function handleSubmit(data) {
    const { email, password } = data;
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Digite seu e-mail")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Digite sua senha")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      dispatch(signInRequest(formRef, email, password));
      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Formulario>
      <Form ref={formRef} className={classes.root} onSubmit={handleSubmit}>
        <h2>Bem vindo</h2>
        <Input label="E-mail" type="text" name="email" />
        <Input label="Senha" type="password" name="password" />
        <Button type="submit" size="large" className={classes.margin}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <p
          className="buttonPassword"
          onClick={() => {
            state(false);
          }}
        >
          Esqueceu a senha?
        </p>
      </Form>
    </Formulario>
  );
}
