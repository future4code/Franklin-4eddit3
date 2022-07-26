import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useAppNavigate } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";

const SignUpPage = () => {
    const { goToFeedPage } = useAppNavigate();

    return (
        <>
            <Header
            disableButtonLogout={true}
            />
            <SignUpForm/>
            <button onClick={() => { goToFeedPage() }}>Feed Page</button>
        </>
    );
}

export default SignUpPage;