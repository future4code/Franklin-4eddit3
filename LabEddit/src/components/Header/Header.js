import React from "react";
import { useAppNavigate } from "../../routes/coordinator";
import Logo from "../../assets/logo.svg";
import { StyleMenu, StyleLogo, StyleButton } from "./styled";
import swal from "sweetalert";

export const Header = (props) => {
  const { goToLoginPage } = useAppNavigate();

  const Logout = () => {
    localStorage.clear()
    swal("Perfil deslogado com sucesso");
    goToLoginPage()
}

  return (
    <StyleMenu>
      <div></div>
      <StyleLogo src={Logo} onClick={() => goToLoginPage()}></StyleLogo>
      {props.disableButtonLogout ? (
        <StyleButton onClick={() => goToLoginPage()}>Entrar</StyleButton>
      ) : (
        <StyleButton onClick={() => Logout()}>Logout</StyleButton>
      )}
    </StyleMenu>
  );
};
