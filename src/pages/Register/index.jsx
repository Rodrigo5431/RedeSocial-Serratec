import React, { useState } from "react";
import { All, Botao, Formulario, H2, Input, Main } from "./Register.styles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [url, setUrl] = useState();
  const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  const postLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8080/usuarios", {
      nome: nome,
      sobrenome : sobrenome,
      email : email,
      senha : senha,
      dataNascimento: dataNascimento,
      url : url,
    });

   const data =  response.data 
   console.log(data);

  } catch (error) {
    console.error("Erro ao fazer login:", error);
    setError("Credenciais inválidas. Tente novamente.");
  }
}
function invertDate(data) {
  const [year, month, day] = data.split("-");
  setDataNascimento(data); 
}

  return (
    <Main>
      <All>
        <H2>Registre-se</H2>
        <Formulario onSubmit={(e)=> postLogin(e)}>

          <Input type="text" 
           placeholder="Nome"
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
            required
            />

          <Input
            type="text"
            placeholder="SobreNome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
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
            value={dataNascimento}
            onChange={(e) => {invertDate(e.target.value), setDataNascimentoUsuario(e.target.value)}}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Input
            type="file"
            placeholder="Foto"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
