import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { Routes, Route } from "react-router-dom";
import { FeedContextProvider } from "../context/feedContext";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="feed"
          element={
            <FeedContextProvider>
              <FeedPage />
            </FeedContextProvider>
          }
        />
        <Route path="signup" element={<SignUpPage />} />
        <Route
          path="post/:id"
          element={
            <FeedContextProvider>
              <PostPage />
            </FeedContextProvider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
