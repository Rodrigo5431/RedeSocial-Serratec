import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";
import axios from "axios";
import {
  Headerpp,
  Divi,
  List,
  Navigation,
  Text,
  Ulist,
  Tittle,
  FotoUsuario,
  InformacoesUsuario,
  FotoUsuarioDiv,
  NavButtons,
} from "./Header.styles";
import { useForm } from "react-hook-form";

export default function Header() {
  const [foto, setFoto] = useState(null);
  const [infLogout, setInfLogout] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUserEmailFromToken = (token) => {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.sub;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };

  const getUserIdFromEmail = async (email) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:8080/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const usuarios = response.data;
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email
      );
      return usuarioEncontrado ? usuarioEncontrado.id : null;
    } catch (error) {
      console.error("Erro ao recuperar usuários:", error);
      return null;
    }
  };

  const getFoto = async () => {
    try {
      const token = localStorage.getItem("token");
      const email = getUserEmailFromToken(token);
      const userId = await getUserIdFromEmail(email);
      setEmail(email);

      if (userId) {
        const response = await axios.get(
          `http://localhost:8080/usuarios/${userId}/foto`,
          {
            headers: { Authorization: `Bearer ${token}` },
            responseType: "blob",
          }
        );
        setFoto(URL.createObjectURL(response.data));
      }
    } catch (error) {
      console.error("Erro ao buscar foto do usuário:", error);
    }
  };

  useEffect(() => {
    getFoto();

    return () => {
      if (foto) URL.revokeObjectURL(foto);
    };
  }, []);

  return (
    <Headerpp>
      <Divi>
        <Tittle>Techgram</Tittle>
        <Navigation>
          <Ulist>
            <List>
              <NavButtons to="/home">
                <Text>Home</Text>
              </NavButtons>
            </List>
            <List>
              <NavButtons to="/Posts">
                <Text>Postagens</Text>
              </NavButtons>
            </List>
            <List>
              <NavButtons to="/suporte">
                <Text>Suporte</Text>
              </NavButtons>
            </List>
          </Ulist>
        </Navigation>
      </Divi>
      <InformacoesUsuario>
        <FotoUsuario
          src={foto}
          alt="Foto do usuário"
          onClick={() => setInfLogout(!infLogout)}
        />
      </InformacoesUsuario>
      {infLogout && (
        <FotoUsuarioDiv>
          {email}
          <Logout />
        </FotoUsuarioDiv>
      )}
    </Headerpp>
  );
}
