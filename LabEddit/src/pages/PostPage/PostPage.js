import { useAppNavigate } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";
import { PostPageContainer } from "./styled";
import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import React, { useEffect } from "react";
import { PostInput } from "../../components/PostInput/PostInput";
import useForm from "../../hooks/useForm";
import { createComment } from "../../services/comments";
import { FeedContext } from "../../context/feedContext";

const PostPage = () => {
  useProtectedPage();
  const { goToFeedPage } = useAppNavigate();
  const [form, handleInputChange, clear] = useForm({
    body: "",
  });
  const params = useParams();
  const { selectedPost } = React.useContext(FeedContext);

  const postsComents = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );

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

  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment({ postId: params.id, body: form });
    clear();
  };

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
        <PostCard
          key={selectedPost.id}
          body={selectedPost.body}
          userName={selectedPost.username}
          voteSum={selectedPost.voteSum}
          commentCount={selectedPost.commentCount}
        />
        <PostInput
          name={"body"}
          value={form.body}
          onChange={handleInputChange}
          onClick={onSubmitForm}
          placeholder={"Adicionar comentário"}
          buttonText="Responder"
        />
        {renderComents}
        <hr />
      </PostPageContainer>
    </div>
  );
};
export default PostPage;
