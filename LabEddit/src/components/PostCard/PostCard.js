import { PostCardContainer, StyleVote } from "./styled";

const PostCard = (props) => {

    return (
        <PostCardContainer>
            <p>Enviado por: @Incididunt</p>
            <p>Occaecat duis dolor id ullamco officia dolore labore nisi deserunt adipisicing.</p>
            <StyleVote>
                <span class="material-icons">arrow_upward</span>
                <p>345</p>
                <span class="material-icons">arrow_downward</span>
                {props.resposta === true ? <span></span> : <span class="material-icons">chat_bubble_outline</span>}
            </StyleVote>
        </PostCardContainer>
    )
}

export default PostCard;