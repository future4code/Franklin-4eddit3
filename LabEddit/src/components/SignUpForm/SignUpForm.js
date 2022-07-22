import useForm from "../../hooks/useForm";

function SignUpForm() {
  const [form, handleInputChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    clear();
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <input
            name={"name"}
            value={form.name}
            onChange={handleInputChange}
            label={"nome"}
            required
            type={"name"}
          />
          <input
            name={"email"}
            value={form.email}
            onChange={handleInputChange}
            label={"E-mail"}
            required
            type={"email"}
          />
          <input
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
            label={"Senha"}
            required
            type={"password"}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default SignUpForm;
