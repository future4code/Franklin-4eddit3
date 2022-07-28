import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import { createPost, loadPosts } from "../services/posts";

export const FeedContext = React.createContext();

export const FeedContextProvider = (props) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    loadPosts();
    // console.log(loadPosts);
    setPosts(loadPosts);
  }, []);

  //   const newPost = async (props) => {
  //     const response = await createPost(props);
  //     setPosts([...posts, response]);
  //   };

  return (
    <FeedContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </FeedContext.Provider>
  );
};
