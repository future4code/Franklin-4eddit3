import { useAppNavigate } from "../../routes/coordinator";

const PostPage = () => {
    const { goToFeedPage } = useAppNavigate();
    return (
        <>
            <h1>PostPage</h1>
            <button onClick={() => { goToFeedPage() }} >Feed</button>
        </>
    );
}

export default PostPage;