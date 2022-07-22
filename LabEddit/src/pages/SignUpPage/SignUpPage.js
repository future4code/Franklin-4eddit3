import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useAppNavigate } from "../../routes/coordinator";

const SignUpPage = () => {
    const { goToFeedPage } = useAppNavigate();

    return (
        <>
            <SignUpForm/>
            <button onClick={() => { goToFeedPage() }}>Feed Page</button>
        </>
    );
}

export default SignUpPage;