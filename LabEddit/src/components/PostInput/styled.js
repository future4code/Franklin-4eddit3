import styled from "styled-components";

export const StyleInput = styled.textarea`
  width: 350px;
  height: 131px;
  border: none;
  border-radius: 12px;
  background-color: #ededed;
  padding: 12px;
  margin: 10px;
  resize: none;
`;

export const StyleLine = styled.hr`
  width: 363.01px;
  margin-top: 14px;
  height: 1px;
  border: none;
  background-image: linear-gradient(
    90deg,
    rgba(255, 100, 137, 1),
    rgba(249, 178, 78, 1)
  );
`;
export const PostInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyleButton = styled.button`
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  border: none;
  color: #fff;
  font-weight: 700;
  margin-top: 20px;
  font-size: 15px;
`;
