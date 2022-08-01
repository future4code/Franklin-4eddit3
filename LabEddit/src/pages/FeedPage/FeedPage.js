import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useAppNavigate } from "../../routes/coordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { StyleContainerPage, StyleInputBox } from "./styled";
import { PostInput } from "../../components/PostInput/PostInput";
import { createPost } from "../../services/posts";
import useForm from "../../hooks/useForm";
import { FeedContext } from "../../context/feedContext";

const FeedPage = () => {
  useProtectedPage();
  const { goToPostPage } = useAppNavigate();
  const { isLoading, setSelectedPost, postList, loadPosts } =
    React.useContext(FeedContext);
  var [timer, setTimer] = useState(0);
  const [renderLoading, setRenderLoading] = useState("carregando");

  const [form, handleInputChange, clear] = useForm({
    title: " ",
    body: "",
  });

  const onClickCard = (post) => {
    goToPostPage(post.id);
    setSelectedPost(post);
  };

  const postsCards =
    postList &&
    postList.map((post) => {
      return (
        <PostCard
          onClick={() => onClickCard(post)}
          key={post.id}
          body={post.body}
          userName={post.username}
          voteSum={post.voteSum}
          commentCount={post.commentCount}
        />
      );
    });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form);
    clear();
    loadPosts();
  };

  const loadAnimation = () => {
    if (timer === 0) {
      setRenderLoading("carregando");
      timer++;
    } else if (timer === 1) {
      setRenderLoading("carregando.");
      timer++;
    } else if (timer === 2) {
      setRenderLoading("carregando..");
      timer++;
    } else if (timer === 3) {
      setRenderLoading("carregando...");
      timer = 0;
    }
  };

  useEffect(() => {
    setInterval(() => {
      loadAnimation();
    }, 600);
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <StyleContainerPage>
        <StyleInputBox>
          <PostInput
            name={"body"}
            value={form.body}
            onChange={handleInputChange}
            onClick={onSubmitForm}
            placeholder={"Escreva seu post..."}
            buttonText="Postar"
          />
        </StyleInputBox>
        {isLoading ? renderLoading : postsCards}
      </StyleContainerPage>
    </div>
  );
};

export default FeedPage;
