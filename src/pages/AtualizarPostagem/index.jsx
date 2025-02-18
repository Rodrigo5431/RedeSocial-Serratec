import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Main,
  CardPost,
  MsgH1,
  Line,
  CardBody,
  Formulario,
  LabText,
  TextConteudo,
  BtnDiv,
  BtnPost,

} from "./AtualizarPosatagem";

function AtualizarPostagem() {
  const { id } = useParams();

  const [conteudo, setConteudo] = useState("");
  const [dataCriacao, setDataCriacao] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPostagem = async () => {
      try {
        const response = await axios.get(
          `https://rede-social-backend.onrender.com/postagens/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setConteudo(response.data.conteudo);
        setDataCriacao(response.data.dataCriacao);
      } catch (error) {
        console.error("Erro ao buscar a postagem:", error);
        setError("Não foi possível carregar a postagem.");
      }
    };
    fetchPostagem();
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://rede-social-backend.onrender.com/postagens/${id}`,

        { conteudo, datacriacao: dataCriacao },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/home");
    } catch (error) {
      console.error("Erro ao atualizar a postagem:", error);
      setError("Erro ao atualizar a postagem. Tente novamente.");
    }
  };

  return (
    <Main>
      <CardPost>
        <MsgH1>Atualizar Postagem</MsgH1>
        <Line />
        <CardBody>
          <Formulario onSubmit={handleUpdate}>
            <LabText>Conteúdo:</LabText>
            <TextConteudo
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              placeholder="Novo conteúdo da postagem"
              required
            />
            <BtnDiv>
              <BtnPost onclick={() => navigate("/home")}>Voltar</BtnPost>
              <BtnPost type="submit">Atualizar</BtnPost>
            </BtnDiv>
          </Formulario>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </CardBody>
      </CardPost>
    </Main>
  );
}

export default AtualizarPostagem;
