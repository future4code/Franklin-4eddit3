import useForm from "../../hooks/useForm";
import React from "react";
import { StyleInput } from "./styled";
import { StyleDivInput } from "./styled";
import swal from "sweetalert";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useAppNavigate } from "../../routes/coordinator";
import { Button } from "../Button/Button";

function LoginForm() {
  const [form, handleInputChange, clear] = useForm({ email: "", password: "" });
  const { goToFeedPage } = useAppNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        swal("Login realizado com sucesso");
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
        <Button type="submit" text="Continuar" />
      </form>
    </div>
  );
}

export default LoginForm;
