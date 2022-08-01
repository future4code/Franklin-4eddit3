import { PostInputDiv, StyleButton, StyleInput, StyleLine } from "./styled";

export const PostInput = (props) => {
  return (
    <PostInputDiv>
      <StyleInput
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <StyleButton onClick={props.onClick}>{props.buttonText}</StyleButton>
      <StyleLine />
    </PostInputDiv>
  );
};
