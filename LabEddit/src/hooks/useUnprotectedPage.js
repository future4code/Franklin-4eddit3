const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToRecipesList(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage;