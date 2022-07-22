import { useAppNavigate } from "../../routes/coordinator";

const SignUpPage = () => {
    const { goToFeedPage } = useAppNavigate();

    return (
        <>
            <h1>SignUpPage</h1>
            <button onClick={() => { goToFeedPage() }}>Feed Page</button>
        </>
    );
}

export default SignUpPage;