import React, { useState } from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { createPost } from "../services/posts";

export const FeedContext = React.createContext();
export const FeedContextProvider = (props) => {
  const [selectedPost, setSelectedPost] = useState();

  const posts = useRequestData([], `${BASE_URL}/posts`);

  //   const newPost = async (props) => {
  //     const response = await createPost(props);
  //     setPosts([...posts, response]);
  //   };

  return (
    <FeedContext.Provider value={{ posts, setSelectedPost, selectedPost }}>
      {props.children}
    </FeedContext.Provider>
  );
};
