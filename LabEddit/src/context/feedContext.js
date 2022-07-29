import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { createPost } from "../services/posts";

export const FeedContext = React.createContext();
export const FeedContextProvider = (props) => {
  const [selectedPost, setSelectedPost] = useState();
  const [postList, setPostList] = useState();

  const posts = useRequestData([], `${BASE_URL}/posts`);

  const loadPosts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setPostList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <FeedContext.Provider
      value={{ posts, setSelectedPost, selectedPost, postList, loadPosts }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};
