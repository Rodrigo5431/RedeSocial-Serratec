import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AtualizarPostagem() {
  const { id } = useParams(); // Obtém o ID da postagem da URL
  const [conteudo, setConteudo] = useState("");
  const [dataCriacao, setDataCriacao] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Busca a postagem atual para preencher o formulário
    const fetchPostagem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/postagens/${id}`,
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
        `http://localhost:8080/postagens/${id}`,
        { conteudo, datacriacao: dataCriacao }, // Usando o nome correto da propriedade
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Postagem atualizada com sucesso!");
      navigate("/home"); // Redireciona para a página inicial após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a postagem:", error);
      setError("Erro ao atualizar a postagem. Tente novamente.");
    }
  };

  return (
    <div>
      <h2>Atualizar Postagem</h2>
      <form onSubmit={handleUpdate}>
        <textarea
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Novo conteúdo da postagem"
          required
        />
        <button type="submit">Atualizar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AtualizarPostagem;
