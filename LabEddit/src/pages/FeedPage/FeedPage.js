import { Header } from "../../components/Header/Header";
import { useAppNavigate } from "../../routes/coordinator";

const FeedPage = () => {
    const { goToPostPage } = useAppNavigate();
    return (
        <>
            <Header/>
            <h1>FeedPage</h1>
            <button onClick={() => { goToPostPage() }} >Post Page</button>
        </>
    );
}

export default FeedPage;