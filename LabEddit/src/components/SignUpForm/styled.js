import styled from "styled-components";

export const StyleFormDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleDivInput = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 60px;
`;

export const StyleInput = styled.input`
  width: 363px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  font-size: 14px;
  padding-left: 14px;
  ::placeholder {
    color: #9fa6b3;
    font-weight: 400;
  }
  &:focus {
    ::placeholder {
      position: absolute;
      top: 8px;
      display: block;
      transition: 0.2s;
      font-size: 12px;
    }
  }
`;

export const Checkbox = styled.input`
  margin: 6px;
`;

export const StyleCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StylePoliticsContainer = styled.div`
  margin-top: 40px;
`;

export const StyleParagraph = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: #373737;
  font-family: sans-serif;
  margin-top: 15px;
`;

export const StyleLink = styled.a`
  font-weight: 300;
  font-size: 14px;
  color: #4088cb;
  font-family: sans-serif;
  margin-top: 15px;
`;
