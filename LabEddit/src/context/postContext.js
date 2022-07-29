import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const CommentContext = React.createContext();

export const CommentContextProvider = (props) => {
  const [comments, setComments] = useState();

  const loadPosts = async (props) => {
    try {
      const res = await axios.get(`${BASE_URL}/posts/${props}/comments`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setComments(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CommentContext.Provider value={{ loadPosts, comments }}>
      {props.children}
    </CommentContext.Provider>
  );
};
