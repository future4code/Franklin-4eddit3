import { useAppNavigate } from "../../routes/coordinator";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from '../../assets/logo.png'
import {StyleButton} from './styled'
import { StyleImg, StyleContainer, StyleTitle, StyleParagraph  } from "./styled";

const LoginPage = () => {
  const { goToSignUpPage } = useAppNavigate();
  /*     useUnprotectedPage() */
  return (
    <StyleContainer>
      <StyleImg src={Logo} />
      <StyleTitle>LabEddit</StyleTitle>
      <StyleParagraph>O projeto de rede social da Labenu</StyleParagraph>
      <LoginForm />
      <div>
        <StyleButton
          onClick={() => { goToSignUpPage();}}>
          Crie uma conta!
        </StyleButton>
      </div>
    </StyleContainer>
  );
};

export default LoginPage;
