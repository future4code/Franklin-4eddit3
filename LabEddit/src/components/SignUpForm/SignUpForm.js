import useForm from "../../hooks/useForm";
import {
  StyleInput,
  StyleButton,
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
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    clear();
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <StyleDivInput>
          <StyleInput
            name={"name"}
            value={form.name}
            onChange={handleInputChange}
            label={"nome"}
            placeholder={"Nome de usuário"}
            required
            type={"name"}
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
          <StyleButton type="submit">Cadastrar</StyleButton>
        </StyleFormDiv>
      </form>
    </div>
  );
}
export default SignUpForm;
