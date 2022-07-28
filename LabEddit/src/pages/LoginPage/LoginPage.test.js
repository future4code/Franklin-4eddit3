import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import LoginPage from "./LoginPage"
import { BASE_URL } from '../../constants/urls';
import userEvent from '@testing-library/user-event';
import { useAppNavigate } from '../../routes/coordinator';

jest.mock('axios')

jest.mock('react-router-dom', () => ({
    __esModule: true,
    useNavigate: jest.fn()
}))

jest.mock('../../routes/coordinator', () => ({
    useAppNavigate: () => {
        const goToSignUpPage = jest.fn()
        return { goToSignUpPage }
    }
}))

// useAppNavigate.mockImplementation(() => {
//     const goToSignUpPage = jest.fn()
//     return { goToSignUpPage }
// });

describe("Página de Login", () => {

    test("Testa se a API de Login é chamada com os dados corretos", async () => {
        const { getByPlaceholderText, getByText } = render(<LoginPage />)

        const emailInput = getByPlaceholderText("E-mail")
        const passwordInput = getByPlaceholderText("Senha")
        const signInButton = getByText(/Continuar/i)

        const usuario = {
            email: "demo.email@gmail.com",
            password: "demo.password"
        }

        axios.post.mockResolvedValue({
            data: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2MDBlOTEwLTZhOTYtNDFmOC1iMTY4LTg1MjJjY2M5MzliYSIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1OTAwNzE3NiwiZXhwIjoxNjU5MDUwMzc2fQ.mEbS8oCs520diJcWluwNz6NQtCXOjku8Q_CwLIuUWvU"
            }
        })

        await userEvent.type(emailInput, usuario.email)
        await userEvent.type(passwordInput, usuario.password)

        userEvent.click(signInButton)

        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/users/login`, usuario)
    })

    test.skip("Testa se o botão de Cadastro leva até a página de cadastro", async () => {

        // const goToSignUpPage = useAppNavigate

        const { getByText } = render(<LoginPage />)

        const signUpButton = getByText(/Crie uma conta!/i)

        userEvent.click(signUpButton)

        console.log(useAppNavigate);

        expect(useAppNavigate).toHaveBeenCalledTimes(1)

    })
})