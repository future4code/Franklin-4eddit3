const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLogin(navigate)

        }
    }, [navigate])
}

export default useProtectedPage;