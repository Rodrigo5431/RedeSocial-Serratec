import React from "react";
import { LogoutButton } from "./Logout.styles";

export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Login realizado com sucesso!");
    window.location.href = "/";
  };

  return (
    <LogoutButton onClick={handleLogout}>
      Logout
    </LogoutButton>
  );

}
