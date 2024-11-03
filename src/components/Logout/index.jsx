import React from "react";

export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout realizado com sucesso!");
    window.location.href = "/"; 
  };

  return (
    <button onClick={handleLogout} style={{ marginTop: "20px" }}>
      Logout
    </button>
  );
}
