import React from "react";
import { Header } from "../../components/Header/Header";
import { useAppNavigate } from "../../routes/coordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage"; 
import PostCard from "../../components/PostCard/PostCard";

const FeedPage = () => {

    useProtectedPage()
    const { goToPostPage } = useAppNavigate();
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const onClickCard = (id) =>{
        goToPostPage(id)
   }

    const postsCards = posts.map((post) => {
        return (
            <PostCard
            onClick={()=> onClickCard(post.id)}
            key={post.id}
            body={post.body}
            userName={post.username}
            voteSum={post.voteSum}
            commentCount={post.commentCount}
/>
        )})

    
  return (
    <div>
        <Header/>
        {postsCards}
      <button onClick={() => goToPostPage()}>Post Page </button>
    </div>
  )
}

export default FeedPage;