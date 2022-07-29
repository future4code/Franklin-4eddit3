import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fbfbfb;
  margin-right: 10px;
  padding: 10px;
  width: 350px;
  min-height: 121px;
`;

export const StyleVote = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid thin black; */
  border-radius: 10px;
`;

export const StyleParagraphEnviado = styled.p`
  font-size: 12px;
  margin-top: 5px;
  display: flex;
  color: #6f6f6f;
`;
export const StyleTextPost = styled.p`
  font-family: 13px;
  font-weight: 500;
  margin: 15px 0;

  word-wrap: break-word;
`;

export const StyleDivArrow = styled.p`
  width: 98px;
  height: 27px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;

export const StyleImgArrow = styled.img`
  width: 15px;
  height: 15px;
`;

export const StyleDivComentarios = styled.p`
  min-width: 65px;
  height: 27px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
`;

export const StyleContainerIcons = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
`;

export const StyleNumbers = styled.p`
  color: #6f6f6f;
  font-size: 11px;
  font-weight: 700;
`;
