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
    color: #323941;
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

export const StyleButton = styled.button`
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  border: none;
  color: #fff;
  font-weight: 700;
  margin-top: 35px;
  font-size: 15px;
`;
