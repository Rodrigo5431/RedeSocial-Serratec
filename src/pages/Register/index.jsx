import React, { useState } from "react";
import { All, Botao, Formulario, H2, Input, Main } from "./Register.styles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
   // setError("");
    setSuccess(false);
  }

  try {
    const response = axios.post("http://localhost:8080/usuarios", {
      name,
      lastName,
      email,
      date,
      password,
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    setError("Credenciais inválidas. Tente novamente.");
  }

  return (
    <Main>
      <All>
        <H2>Registre-se</H2>
        <Formulario onSubmit={handleLogin}>

          <Input type="text" 
           placeholder="Nome"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
            />

          <Input
            type="text"
            placeholder="SobreNome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Input type="text" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required />

          <Input
            type="date"
            placeholder="Data de Nascimento"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Botao type="submit">Criar Conta</Botao>
          <Link to={"/"}>Ja tenho uma conta</Link>
        </Formulario>

      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Login realizado com sucesso!
        </p>
      )}
      </All>
    </Main>
  );
}
