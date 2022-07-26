import { useAppNavigate } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";
import { PostPageContainer} from "./styled";
import PostCard from "../../components/PostCard/PostCard";

const PostPage = () => {
    const { goToFeedPage } = useAppNavigate();

    return (
        <>
            <Header />
            <PostPageContainer>
                <button onClick={() => { goToFeedPage() }} >Feed</button>

                <PostCard resposta = {false}/>

                <textarea cols="30" rows="10" placeholder="Adicionar comentário" required></textarea>
                <button>Responder</button>

                <hr />
                
                <PostCard resposta = {true}/>

            </PostPageContainer>
        </>
    );
}

export default PostPage;