import { useAppNavigate } from "../../routes/coordinator";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../assets/logo.svg";
import { StyleButton, StyleLine } from "./styled";
import { StyleImg, StyleContainer, StyleTitle, StyleParagraph } from "./styled";

const LoginPage = () => {
  const { goToSignUpPage } = useAppNavigate();
  /*     useUnprotectedPage() */
  return (
    <StyleContainer>
      <StyleImg src={Logo} />
      <StyleTitle>LabEddit</StyleTitle>
      <StyleParagraph>O projeto de rede social da Labenu</StyleParagraph>
      <LoginForm />
      <StyleLine />
      <StyleButton
        onClick={() => {
          goToSignUpPage();
        }}
      >
        Crie uma conta!
      </StyleButton>
    </StyleContainer>
  );
};

export default LoginPage;
