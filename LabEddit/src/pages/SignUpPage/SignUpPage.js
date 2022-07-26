import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Header } from "../../components/Header/Header";
import { StyleContainer, StyleTitle } from "./styled";

const SignUpPage = () => {
  return (
    <div>
      <Header disableButtonLogout={true} />
      <StyleContainer>
        <StyleTitle>Olá, boas vindas ao LabEddit ;)</StyleTitle>
        <SignUpForm />
      </StyleContainer>
    </div>
  );
};

export default SignUpPage;
