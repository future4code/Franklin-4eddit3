import {
  PostCardContainer,
  StyleVote,
  StyleParagraphEnviado,
  StyleTextPost,
  StyleDivArrow,
  StyleImgArrow,
  StyleDivComentarios,
  StyleContainerIcons,
  StyleNumbers,
} from "./styled";
import SetaParaCima from "../../assets/seta-pra-cima.png";
import SetaParaBaixo from "../../assets/seta-pra-baixo.png";
import ComentarioIcone from "../../assets/comentario-icone.png";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostCard = (props) => {
  useProtectedPage();

  const commentCounter = () => {
    if (props.commentCount === null) {
      return "0";
    } else {
      return props.commentCount;
    }
  };

  const voteCounter = () => {
    if (props.voteSum === null) {
      return "0";
    } else {
      return props.voteSum;
    }
  };

  return (
    <PostCardContainer onClick={props.onClick}>
      <StyleParagraphEnviado>
        Enviado por: @{props.userName}
      </StyleParagraphEnviado>
      <StyleTextPost>
        {props.body.length > 37
          ? props.body.substring(0, 37) + "..."
          : props.body}
      </StyleTextPost>
      <StyleVote>
        <StyleContainerIcons>
          <StyleDivArrow>
            <StyleImgArrow src={SetaParaCima}></StyleImgArrow>
            <StyleNumbers>{voteCounter()}</StyleNumbers>
            <StyleImgArrow src={SetaParaBaixo}></StyleImgArrow>
          </StyleDivArrow>

          {props.resposta === true ? (
            <span></span>
          ) : (
            <StyleDivComentarios>
              <img src={ComentarioIcone}></img>
              <StyleNumbers>{commentCounter()}</StyleNumbers>
            </StyleDivComentarios>
          )}
        </StyleContainerIcons>
      </StyleVote>
    </PostCardContainer>
  );
};

export default PostCard;
