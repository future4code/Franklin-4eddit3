import React from "react";
import { Header } from "../../components/Header/Header";
import { useAppNavigate } from "../../routes/coordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { StyleContainerPage, StyleInputBox } from "./styled";
import { PostInput } from "../../components/PostInput/PostInput";

const FeedPage = () => {
  useProtectedPage();
  const { goToPostPage } = useAppNavigate();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  const onClickCard = (id) => {
    goToPostPage(id);
  };

  const postsCards = posts.map((post) => {
    return (
      <PostCard
        onClick={() => onClickCard(post.id)}
        key={post.id}
        body={post.body}
        userName={post.username}
        voteSum={post.voteSum}
        commentCount={post.commentCount}
      />
    );
  });

  return (
    <div>
      <div>
        <Header />
      </div>
      <StyleContainerPage>
        <StyleInputBox>
          <PostInput placeholder={"Escreva seu post..."} buttonText="Postar" />
        </StyleInputBox>
        {postsCards}
        <button onClick={() => goToPostPage()}>Post Page </button>
      </StyleContainerPage>
    </div>
  );
};

export default FeedPage;
