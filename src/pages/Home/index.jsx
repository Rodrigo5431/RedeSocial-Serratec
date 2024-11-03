import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";

export default function Home() {
  const [postagens, setPostagens] = useState([]);
  const [fotos, setFotos] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    } else {

      const fetchPostagens = async () => {
        try {
          const response = await axios.get("http://localhost:8080/postagens", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPostagens(response.data);
          setError("");

          const fotoPromises = response.data.map(async (postagem) => {
            try {
              const fotoResponse = await axios.get(
                `http://localhost:8080/usuarios/${postagem.usuario.id}/foto`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                  responseType: "blob",
                }
              );

              const url = URL.createObjectURL(fotoResponse.data);
              return { id: postagem.usuario.id, url };
            } catch (error) {
              console.error("Erro ao buscar foto do usuário:", error);
              return { id: postagem.usuario.id, url: null };
            }
          });

          const fotosArray = await Promise.all(fotoPromises);
          const fotosMap = fotosArray.reduce((acc, { id, url }) => {
            acc[id] = url;
            return acc;
          }, {});
          setFotos(fotosMap);
        } catch (error) {
          console.error("Erro ao buscar postagens:", error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            navigate("/");
          } else {
            setError(
              "Erro ao buscar postagens. Verifique se você está autenticado."
            );
          }
        }
      };

      fetchPostagens();
      const intervalId = setInterval(fetchPostagens, 10000); 

      return () => clearInterval(intervalId);
    }
  }, [navigate]);

  useEffect(() => {
    return () => {
      Object.values(fotos).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [fotos]);

  const getUserEmailFromToken = (token) => {
    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload.sub;
  };

  const handleDelete = async (postagemId) => {
    try {
      const token = localStorage.getItem("token");
      const userEmail = getUserEmailFromToken(token);

      const postagem = postagens.find((p) => p.id === postagemId);

      if (postagem.usuario.email === userEmail) {
        await axios.delete(`http://localhost:8080/postagens/${postagemId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPostagens((prev) => prev.filter((p) => p.id !== postagemId));
      } else {
        alert("Você não tem permissão para deletar esta postagem.");
      }
    } catch (error) {
      console.error("Erro ao deletar postagem:", error);
      setError("Erro ao deletar a postagem.");
    }
  };

  return (
    <div>
      <h2>Postagens</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {postagens.map((postagem) => (
          <li key={postagem.id}>
            <strong>
              {postagem.usuario.nome} {postagem.usuario.sobrenome}
            </strong>
            <img
              src={
                fotos[postagem.usuario.id] || "caminho/para/imagem/padrao.jpg"
              }
              alt={`${postagem.usuario.nome} ${postagem.usuario.sobrenome}`}
              onError={(e) => {
                e.target.src = "caminho/para/imagem/padrao.jpg";
              }}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            : {postagem.conteudo}
            {postagem.usuario.email ===
              getUserEmailFromToken(localStorage.getItem("token")) && (
              <>
                <button onClick={() => handleDelete(postagem.id)}>
                  Deletar
                </button>
                <button onClick={() => navigate(`/atualizar/${postagem.id}`)}>
                  Atualizar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Logout />
    </div>
  );
}
