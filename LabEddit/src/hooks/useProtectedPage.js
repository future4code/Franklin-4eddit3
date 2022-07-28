import { useAppNavigate } from "../routes/coordinator";
import { useEffect } from "react";
import swal from "sweetalert";

const useProtectedPage = () => {
    
    const { goToLoginPage } = useAppNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
        swal("Você não está logado, logue-se!")
        goToLoginPage()

        }
    }, [])
}

export default useProtectedPage;