import { useState } from "react";
import {
  ButtonDiv,
  Configuration,
  ConfigurationButton,
  ConfigurationDiv,
  Conteudo,
  ConteudoDiv,
  FotoPerfil,
  ListItem,
  NomeUsuario,
  Post,
} from "./Home.style.jsx";

export default function HomePostConfiguration({
  postagem,
  fotos,
  email,
  handleDelete,
  navigate,
}) {
  const [configuration, setConfiguration] = useState(false);
  const postagem = props.postagem;
  const fotos = props.fotos;
  const email = props.email;
  const deletar = props.deletar;

  return (
    <ListItem key={postagem.id}>
      <Post>
        <FotoPerfil
          src={fotos[postagem.usuario.id] || "caminho/para/imagem/padrao.jpg"}
          alt={`${postagem.usuario.nome} ${postagem.usuario.sobrenome}`}
          onError={(e) => {
            e.target.src = "caminho/para/imagem/padrao.jpg";
          }}
        ></FotoPerfil>
        <NomeUsuario>
          {postagem.usuario.nome} {postagem.usuario.sobrenome}
        </NomeUsuario>
      </Post>

      <ConteudoDiv>
        <Conteudo>{postagem.conteudo}</Conteudo>
      </ConteudoDiv>

      <Configuration>
        {postagem.usuario.email === email && (
          <>
            <ConfigurationDiv onClick={() => setConfiguration(!configuration)}>
              . . .
            </ConfigurationDiv>
            {configuration && (
              <ButtonDiv>
                <ConfigurationButton
                  onClick={() => navigate(`/atualizar/${postagem.id}`)}
                >
                  Editar
                </ConfigurationButton>
                <ConfigurationButton onClick={() => deletar(postagem.id)}>
                  Apagar
                </ConfigurationButton>
              </ButtonDiv>
            )}
          </>
        )}
      </Configuration>
    </ListItem>
  );
}
