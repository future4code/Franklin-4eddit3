import { useAppNavigate } from "../../routes/coordinator";
import Logo from "../../assets/logo.svg";
import { ErrorPageContiner, StyleTitle ,StyleText, StyleButton, LogoImg} from "./styled";
import { Header } from "../../components/Header/Header";


const ErrorPage = () => {
    const { goBack } = useAppNavigate();
    return (
    <>
        <Header/>
        <ErrorPageContiner>
            <StyleTitle>Error 404</StyleTitle>
            <LogoImg src={Logo} alt="Logo Labenu" />
            <StyleText>Ops, está página não existe!</StyleText>
            <StyleButton onClick={() => { goBack() }} >Voltar</StyleButton>
        </ErrorPageContiner>
    </>
    );
}

export default ErrorPage;
