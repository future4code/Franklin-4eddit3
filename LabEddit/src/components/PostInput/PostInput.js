import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { PostInputDiv, StyleButton, StyleInput, StyleLine } from "./styled";

export const PostInput = (props) => {
  const [form, handleInputChange, clear] = useForm({
    title: " ",
    body: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form);
    clear();
  };

  return (
    <PostInputDiv>
      <StyleInput
        name={"body"}
        value={form.body}
        onChange={handleInputChange}
        placeholder={props.placeholder}
      />
      <StyleButton onClick={onSubmitForm}>{props.buttonText}</StyleButton>
      <StyleLine />
    </PostInputDiv>
  );
};
