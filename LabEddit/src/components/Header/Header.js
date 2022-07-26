import React from "react";
import { useAppNavigate } from "../../routes/coordinator";
import Logo from "../../assets/logo.svg";
import { StyleMenu, StyleLogo, StyleButton } from "./styled";

export const Header = (props) => {
  const { goToLoginPage } = useAppNavigate();

  return (
    <StyleMenu>
      <div></div>
      <StyleLogo src={Logo} onClick={() => goToLoginPage()}></StyleLogo>
      {props.disableButtonLogout ? (
        <StyleButton onClick={() => goToLoginPage()}>Entrar</StyleButton>
      ) : (
        <StyleButton onClick={() => goToLoginPage()}>Logout</StyleButton>
      )}
    </StyleMenu>
  );
};
