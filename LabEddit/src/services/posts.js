import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPost = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (e) {
    console.log("deu erro, tente novamente");
  }
};

export const loadPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/posts/`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
