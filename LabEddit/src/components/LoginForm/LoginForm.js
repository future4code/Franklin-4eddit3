import useForm from "../../hooks/useForm";
import React from "react";
import { StyleFormDiv, StyleInput } from "./styled";
import { StyleButton } from "./styled";
import { StyleDivInput } from "./styled";
import swal from "sweetalert";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useAppNavigate } from "../../routes/coordinator";

function LoginForm() {
  const [form, handleInputChange, clear] = useForm({ email: "", password: "" });
  const { goToFeedPage } = useAppNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)

      .then((response) => {
        swal("Login realizado com sucesso");
        console.log(form);
        clear();
        goToFeedPage();
      })
      .catch((error) => {
        swal("Usuário sem cadastro. Tente novamente");
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <StyleDivInput>
          <StyleInput
            name={"email"}
            value={form.email}
            onChange={handleInputChange}
            label={"E-mail"}
            placeholder={"E-mail"}
            required
            type={"email"}
          />
          <StyleInput
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
            label={"Senha"}
            placeholder={"Senha"}
            required
            type={"password"}
          />
        </StyleDivInput>
        <StyleFormDiv>
          <StyleButton type="submit">Continuar</StyleButton>
        </StyleFormDiv>
      </form>
    </div>
  );
}

export default LoginForm;
