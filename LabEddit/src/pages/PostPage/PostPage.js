import { useAppNavigate } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";
import { PostPageContainer } from "./styled";
import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { PostInput } from "../../components/PostInput/PostInput";

const PostPage = () => {
  useProtectedPage();
  const { goToFeedPage } = useAppNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Header />
      <PostPageContainer>
        <button
          onClick={() => {
            goToFeedPage();
          }}
        >
          Feed
        </button>

        <PostCard resposta={false} />

        <PostInput placeholder="Adicionar comentário" buttonText="Responder" />

        <PostCard resposta={true} />
      </PostPageContainer>
    </div>
  );
};

export default PostPage;
