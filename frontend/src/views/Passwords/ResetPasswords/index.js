import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
//components do projeto
import Input from "components/InputUnform/passwords";
import api from "services/api";
//biblioteca
import * as Yup from "yup";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
//material-ui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//styles
import { Wrapper, Image, Formulario } from "./styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

export default function ResetPasswords() {
  const formRef = useRef(null);
  const classes = useStyles();

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { tokens } = useParams();

  useEffect(() => {
    setToken(tokens);
  }, [tokens]);

  async function handleSubmit(data) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .required()
          .min(6, "Minimo de 6 caracteres"),
        password_confirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "As senhas não são iguais"
        )
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.put("passwords", {
        token,
        password,
        password_confirmation
      });

      toast.success("Senha alterada com sucesso!");
      formRef.current.setErrors({});
      await setPassword("");
      await setPasswordConfirmation("");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
        return;
      }

      if (err.response.status === 400) {
        toast.error(err.response.data.message);
        return;
      }
    }
  }

  return (
    <Wrapper>
      <Image className="avatar" />
      <Formulario>
        <Form id="Form" ref={formRef} onSubmit={handleSubmit}>
          <h2>Cadastre uma nova senha</h2>
          <Input
            label="Senha"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            label="Confirme sua senha"
            name="password_confirmation"
            type="password"
            value={password_confirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <Button
            type="submit"
            size="large"
            className={classes.margin}
            onClick={() => handleSubmit(token, password, password_confirmation)}
          >
            Enviar
          </Button>
          <Link to="/">
            <Button className="ButtonBack" type="submit">
              Voltar
            </Button>
          </Link>
        </Form>
      </Formulario>
    </Wrapper>
  );
}
