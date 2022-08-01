import { StyleButton, StyleButtonDiv } from "./styled";

export const Button = (props) => {
  return (
    <StyleButtonDiv>
      <StyleButton>{props.text}</StyleButton>
    </StyleButtonDiv>
  );
};
