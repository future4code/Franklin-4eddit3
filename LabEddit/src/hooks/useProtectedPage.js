import { useAppNavigate } from "../routes/coordinator";
import { useEffect } from "react";

const useProtectedPage = () => {
    
    const { goToLoginPage } = useAppNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
        goToLoginPage()

        }
    }, [])
}

export default useProtectedPage;