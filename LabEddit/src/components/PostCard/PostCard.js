import { PostCardContainer, StyleVote, StyleParagraphEnviado, StyleTextPost, StyleDivArrow, StyleImgArrow, StyleDivComentarios, StyleContainerIcons, StyleNumbers } from "./styled";
import SetaParaCima from '../../assets/seta-pra-cima.png'
import SetaParaBaixo from '../../assets/seta-pra-baixo.png'
import ComentarioIcone from '../../assets/comentario-icone.png'

const PostCard = (props) => {

    return (
        <PostCardContainer onClick={props.onClick}>
            <StyleParagraphEnviado>Enviado por: @{props.userName}</StyleParagraphEnviado>
            <StyleTextPost>{props.body}</StyleTextPost>
            <StyleVote>
                <StyleContainerIcons>
                <StyleDivArrow>
                    <StyleImgArrow src={SetaParaCima}></StyleImgArrow>
                    <StyleNumbers>{props.voteSum}</StyleNumbers>
                    <StyleImgArrow src={SetaParaBaixo}></StyleImgArrow>
                </StyleDivArrow>
                <StyleDivComentarios>
                    {props.resposta === true ? <span></span> : <img src={ComentarioIcone}></img>} 
                    <StyleNumbers>{props.commentCount}</StyleNumbers>
                </StyleDivComentarios>    
                </StyleContainerIcons>                       
            </StyleVote>
        </PostCardContainer>
    )
}

export default PostCard;