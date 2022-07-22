import useForm from "../../hooks/useForm";
import React, { useState } from "react";

function LoginForm() {
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <input
                        name={"email"}
                        value={form.email}
                        onChange={handleInputChange}
                        label={"E-mail"}
                        required
                        type={"email"} />
                    <input
                        name={"password"}
                        value={form.password}
                        onChange={handleInputChange}
                        label={"Senha"}
                        required
                        type={"password"} />
                </div>

                <button type="submit" >Continuar</button>

            </form>
        </div>
    );
}

export default LoginForm;