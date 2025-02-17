import React, { useState } from "react";
import axios from "axios";
import { All, Botao, Formulario, H2, Input, Input2, Main, NavButtons } from "./Login.styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post("https://portfolio-backend-l0j1.onrender.com/login", {
        username,
        password,
      });

      console.log("Resposta da API:", response);

      const token = response.headers["authorization"];

      if (token) {
        const jwtToken = token.split(" ")[1];
        console.log("Token:", jwtToken);
        localStorage.setItem("token", jwtToken);
        setSuccess(true);
        window.location.href = "/home";
      } else {
        console.error("Token não encontrado nos cabeçalhos da resposta.");
        setError("Erro ao processar a resposta do servidor.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <Main>
      <All>
        <H2>Entrar</H2>
        <Formulario onSubmit={handleLogin}>
          <Input 
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input2
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Botao type="submit">Login</Botao>
          <NavButtons to={'/register'}>Não tenho uma conta</NavButtons>
        </Formulario>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Login realizado com sucesso!
          </p>
        )}
      </All>
    </Main>
  );
}
