import React, { useRef } from "react";
//blibliotecas
import * as Yup from "yup";
import { Form } from "@unform/web";
import { useSelector } from "react-redux";
//api
import api from "services/api";
//material ui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Input from "components/InputUnform/passwords";
//toast messages
import { toast } from "react-toastify";
//css
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

export default function ForgotPassword({ state }) {
  const formRef = useRef(null);
  const classes = useStyles();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data, { reset }) {
    const { email } = data;
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Digite seu e-mail")
          .email("Digite um e-mail válido")
      });

      await schema.validate(data, { abortEarly: false });

      await api.post("passwords", {
        email
      });
      toast.success("E-mail enviado com sucesso!");
      reset();
      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
        return;
      }

      if (err.response.status === 404) {
        formRef.current.setErrors(err.response.data.data);
        return;
      }
    }
  }

  return (
    <Formulario>
      <Form id="Form" ref={formRef} onSubmit={handleSubmit}>
        <h2>Recuperação de senha</h2>
        <Input label="E-mail" name="email" type="text" />
        <Button type="submit" size="large" className={classes.margin}>
          {loading ? "Carregando..." : "Enviar"}
        </Button>
        <Button
          className="ButtonBack"
          onClick={() => {
            state(true);
          }}
        >
          Voltar
        </Button>
      </Form>
    </Formulario>
  );
}
