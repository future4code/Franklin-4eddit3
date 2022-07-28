import { useAppNavigate } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";
import { PostPageContainer, StyleButton, StyleTextArea } from "./styled";
import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { useEffect } from "react";

const PostPage = () => {
  useProtectedPage();
  const { goToFeedPage } = useAppNavigate();
  const params = useParams();
  const post = useRequestData([], `${BASE_URL}/posts`);
  const postsComents = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  useEffect(() => {}, [post, params, postsComents]);
  

  const renderPost = post?.map((post) => {
    if (post.id === params.id) {
      return (
        <PostCard
          key={post.id}
          body={post.body}
          userName={post.username}
          voteSum={post.voteSum}
          commentCount={post.commentCount}
        />
      );
    }
  });
  const renderComents = postsComents.map((post) => {
    return (
      <PostCard
        key={post.id}
        resposta={true}
        userName={post.username}
        body={post.body}
        voteSum={post.voteSum == null ? 0 : post.voteSum}
      />
    );
  });
  return (
    <>
      <Header />
      <PostPageContainer>
        <button
          onClick={() => {
            goToFeedPage();
          }}
        >
          Feed
        </button>
        {renderPost}
        <StyleTextArea
          cols="30"
          rows="10"
          placeholder="Adicionar comentário"
          required
        ></StyleTextArea>
        <StyleButton>Responder</StyleButton>
        {renderComents}
        <hr />
      </PostPageContainer>
    </>
  );
};

export default PostPage;
