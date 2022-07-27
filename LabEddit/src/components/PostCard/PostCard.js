import { PostCardContainer, StyleVote } from "./styled";

const PostCard = (props) => {

    return (
        <PostCardContainer onClick={props.onClick}>
            <p>Enviado por: @{props.userName}</p>
            <p>{props.body}</p>
            <StyleVote>
                <span class="material-icons">arrow_upward</span>
                <p>{props.voteSum}</p>
                <span class="material-icons">arrow_downward</span>
                {props.resposta === true ? <span></span> : <span class="material-icons">chat_bubble_outline</span>} 
                <p>{props.commentCount}</p>
            </StyleVote>
        </PostCardContainer>
    )
}

export default PostCard;