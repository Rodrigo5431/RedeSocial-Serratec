import React from "react";
import axios from "axios";
import {CardBody,CardPost,Formulario,TextConteudo,LabText,Line,Main,MsgH1,BtnPost,BtnDiv,} 
from "./Posts.styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const getUserIdFromEmail = async (email) => {
    try {
      const token = localStorage.getItem("token"); 

      const response = await axios.get("http://localhost:8080/usuarios", {
        headers: {
          Authorization: Bearer ${token}, 
        },
      });

      const usuarios = response.data; 
      const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
      return usuarioEncontrado ? usuarioEncontrado.id : null; 
    } catch (error) {
      console.error("Erro ao recuperar usuários:", error);
      return null; 
    }
  };

  const addPost = async (data) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Você precisa estar logado para criar um post.");
        navigate("/"); 
        return;
      }

      const email = JSON.parse(atob(token.split('.')[1])).sub; 
      const userId = await getUserIdFromEmail(email); 

      if (!userId) {
        alert("Usuário não encontrado.");
        return;
      }

      const postData = {
        usuario: { id: userId }, 
        conteudo: data.conteudo,
        datacriacao: new Date().toISOString(),
      };

      console.log("Dados da postagem:", postData);

      const response = await axios.post(
        "http://localhost:8080/postagens",
        postData,
        {
          headers: {
            Authorization: Bearer ${token},
          },
        }
      );

      console.log("Postagem criada com sucesso:", response.data);
      navigate("/home"); 
    } catch (error) {
      console.error("Erro ao criar postagem:", error.response || error);
      alert("Erro ao criar postagem. Tente novamente.");
    }
  };

  return (
    <Main>
      <CardPost>
        <MsgH1>Crie seu post aqui!</MsgH1>
        <Line></Line>
        <CardBody>
          <Formulario onSubmit={handleSubmit(addPost)}>
            <LabText>Conteúdo</LabText>
            <TextConteudo
              type="text"
              name="conteudo"
              id="conteudo"
              placeholder="conteúdo"
              {...register("conteudo", { required: true })}
            />
            {errors.conteudo && (
              <span style={{ color: "red" }}>Este campo é obrigatório</span>
            )}

            <BtnDiv>
              <BtnPost type="submit">Postar</BtnPost>
            </BtnDiv>
          </Formulario>
        </CardBody>
      </CardPost>
    </Main>
  );
}