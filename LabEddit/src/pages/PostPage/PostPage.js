import { useAppNavigate } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";
import { PostPageContainer} from "./styled";
import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";


const PostPage = () => {
    useProtectedPage()
    const { goToFeedPage } = useAppNavigate();
    const params =useParams()
    console.log(params)

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