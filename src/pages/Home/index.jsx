import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./Home.module.css";
import {
  All,
  Body,
  Postagens,
  Tittle,
  Ulist,
} from "./Home.style.jsx";
import HomePostConfiguration from "./Home.postConfiguration.jsx";

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
          const response = await axios.get("https://rede-social-backend.onrender.com/postagens", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPostagens(response.data);
          setError("");

          const fotoPromises = response.data.map(async (postagem) => {
            try {
              const fotoResponse = await axios.get(
                `https://rede-social-backend.onrender.com/usuarios/${postagem.usuario.id}/foto`,
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
  const email = getUserEmailFromToken(localStorage.getItem("token"));
  const handleDelete = async (postagemId) => {
    try {
      const token = localStorage.getItem("token");
      const userEmail = getUserEmailFromToken(token);

      const postagem = postagens.find((p) => p.id === postagemId);

      if (postagem.usuario.email === userEmail) {
        await axios.delete(`https://rede-social-backend.onrender.com/postagens/${postagemId}`, {
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
    <All>
      <Header />
      <All>
        <Tittle></Tittle>
        <Postagens>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Ulist>
            {postagens.map((postagem) => (
              <HomePostConfiguration
                key={postagem.id} 
                postagem={postagem}
                fotos={fotos}
                email={email}
                handleDelete={handleDelete} 
                navigate={navigate} 
              />
            ))}
          </Ulist>
        </Postagens>
      </All>
    </All>
  );
}
