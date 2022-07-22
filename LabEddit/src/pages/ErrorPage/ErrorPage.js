import { useAppNavigate } from "../../routes/coordinator";

const ErrorPage = () => {
    const { goBack } = useAppNavigate();
    return (
        <>
            <h1>ErrorPage</h1>
            <button onClick={() => { goBack() }} >Voltar</button>
        </>
    );
}

export default ErrorPage;
