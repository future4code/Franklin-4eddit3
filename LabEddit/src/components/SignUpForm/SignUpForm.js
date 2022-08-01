import axios from "axios";
import swal from "sweetalert";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { useAppNavigate } from "../../routes/coordinator";
import { Button } from "../Button/Button";
import {
  StyleInput,
  StyleDivInput,
  StyleFormDiv,
  StylePoliticsContainer,
  StyleCheckboxContainer,
  StyleParagraph,
  Checkbox,
  StyleLink,
} from "./styled";

function SignUpForm() {
  const [form, handleInputChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { goToFeedPage } = useAppNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        swal("Cadastro realizado com sucesso");
        clear();
        goToFeedPage();
      })
      .catch((error) => {
        swal("Email já cadastrado no sistema, por favor utilize outro");
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <StyleDivInput>
          <StyleInput
            name={"username"}
            value={form.username}
            onChange={handleInputChange}
            label={"username"}
            placeholder={"Nome de usuário"}
            required
            type={"username"}
          />
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
          <StylePoliticsContainer>
            <StyleParagraph>
              Ao continuar, você concorda com o nosso
              <StyleLink> Contrato de usuário</StyleLink> e nossa
              <StyleLink> Política de Privacidade</StyleLink>
            </StyleParagraph>
            <StyleCheckboxContainer>
              <Checkbox type="checkbox" />
              <StyleParagraph>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </StyleParagraph>
            </StyleCheckboxContainer>
          </StylePoliticsContainer>
          <Button type="submit" text="Cadastrar" />
        </StyleFormDiv>
      </form>
    </div>
  );
}
export default SignUpForm;
