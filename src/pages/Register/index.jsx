import React, { useState } from "react";
import { All, Botao, Formulario, H2, Input, Main } from "./Register.styles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [url, setUrl] = useState(null);
  const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const postLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "usuarioInserirDTO",
      new Blob(
        [
          JSON.stringify({
            nome,
            sobrenome,
            email,
            senha,
            dataNascimento,
          }),
        ],
        { type: "application/json" }
      )
    );

    if (url) {
      formData.append("file", url);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/usuarios",
        formData
      );
      setSuccess(true);
      setNome("");
      setSobrenome("");
      setEmail("");
      setSenha("");
      setDataNascimento("")
      setUrl(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

  function invertDate(data) {
    const [year, month, day] = data.split("-");
    setDataNascimento(data);
  }

  return (
    <Main>
      <All>
        <H2>Registre-se</H2>
        <Formulario onSubmit={(e) => postLogin(e)}>
          <Input
            type="text"
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
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="date"
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) => {
              invertDate(e.target.value),
                setDataNascimentoUsuario(e.target.value);
            }}
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
            onChange={(e) => setUrl(e.target.files[0])}
            required
          />

          <Botao type="submit">Criar Conta</Botao>
          <Link to={"/"}>Ja tenho uma conta</Link>
        </Formulario>

        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Conta Criada com sucesso!
          </p>
        )}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </All>
    </Main>
  );
}
