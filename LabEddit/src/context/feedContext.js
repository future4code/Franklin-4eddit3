import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";

export const FeedContext = React.createContext();
export const FeedContextProvider = (props) => {
  const [selectedPost, setSelectedPost] = useState();
  const [postList, setPostList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const posts = useRequestData([], `${BASE_URL}/posts`);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setPostList(res.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <FeedContext.Provider
      value={{
        posts,
        setSelectedPost,
        selectedPost,
        postList,
        loadPosts,
        isLoading,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};
