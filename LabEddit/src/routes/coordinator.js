import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
    
    const navigate = useNavigate();
    
    const goToLoginPage = () => {
        navigate("/");
    };

    const goToSignUpPage = () => {
        navigate("/signup");
    };

    const goToFeedPage = () =>{
        navigate(`/feed`);
    }

    const goToPostPage = (id) =>{
        navigate(`/post/${id}`);
    }

    const goBack = () =>{
        navigate(-1);
    }


    return { goToLoginPage, goToSignUpPage, goToPostPage, goToFeedPage, goBack };
};