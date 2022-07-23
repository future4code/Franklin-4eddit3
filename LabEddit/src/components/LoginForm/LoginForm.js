import useForm from "../../hooks/useForm";
import React from "react";
import { StyleInput } from "./styled";
import { StyleButton } from './styled'
import { StyleDivInput } from './styled'

function LoginForm() {
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        clear();
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <StyleDivInput>
                    <StyleInput
                        name={"email"}
                        value={form.email}
                        onChange={handleInputChange}
                        label={"E-mail"}
                        placeholder={"Nome"}
                        required
                        type={"email"} />
                    <StyleInput
                        name={"password"}
                        value={form.password}
                        onChange={handleInputChange}
                        label={"Senha"}
                        placeholder={"Senha"}
                        required
                        type={"password"} />
                </StyleDivInput>

                <StyleButton type="submit" >Continuar</StyleButton>

            </form>
        </div>
    );
}

export default LoginForm;