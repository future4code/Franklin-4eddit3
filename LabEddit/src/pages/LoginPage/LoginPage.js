import { useAppNavigate } from "../../routes/coordinator";
import LoginForm from "../../components/LoginForm/LoginForm";


const LoginPage = () => {
    const { goToFeedPage, goToSignUpPage } = useAppNavigate();
    /*     useUnprotectedPage() */
    return (
        <div>
            <img src={'#'} />
            <LoginForm />
            <div >

                <button onClick={() => { goToSignUpPage() }} >Crie uma conta!</button>
            </div>
        </div>
    );
}

export default LoginPage;


