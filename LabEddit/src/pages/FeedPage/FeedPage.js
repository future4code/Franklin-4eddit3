import { useAppNavigate } from "../../routes/coordinator";

const FeedPage = () => {
    const { goToPostPage } = useAppNavigate();
    return (
        <>
            <h1>FeedPage</h1>
            <button onClick={() => { goToPostPage() }} >Post Page</button>
        </>
    );
}

export default FeedPage;