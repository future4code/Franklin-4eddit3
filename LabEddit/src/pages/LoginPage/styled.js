import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;

export const StyleImg = styled.img`
  width: 80px;
  height: 80px;
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

export const StyleButton = styled.button`
  width: 365px;
  height: 51px;
  border-radius: 27px;
  border: 2px solid #fe7e02;
  background-color: #fff;
  color: #fe7e02;
  font-weight: 700;
  margin-top: 13px;
  font-size: 15px;
`;

export const StyleTitle = styled.h1`
  font-family: sans-serif;
  color: #373737;
  font-size: 29px;
  margin-top: 15px;
`;

export const StyleParagraph = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: #373737;
  font-family: sans-serif;
  margin-top: 15px;
`;
