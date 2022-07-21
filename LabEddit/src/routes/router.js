import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="feed" element={<FeedPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="post" element={<PostPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};